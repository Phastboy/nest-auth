import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleInput } from './types/create-role.input';
import { PrismaService } from 'nestjs-prisma';
import { Role, UserRole } from '@prisma/client';
import { ErrorHandler } from 'src/error-handler/error.util';
import { UsersService } from 'src/users/users.service';

/**
 * @class RolesService
 * @description Service for managing roles
 */
@Injectable()
export class RolesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
    private readonly handler: ErrorHandler,
  ) {}

  /**
   * @method validateRoleName
   * @description Validates the role name
   * @param {string} name - The name of the role
   * @throws {BadRequestException} - If the role name is invalid
   */
  private async validateRoleName(name: string): Promise<void> {
    if (!name || typeof name !== 'string') {
      throw new BadRequestException('Role name must be a non-empty string');
    }
  }

  /**
   * @method createRole
   * @description Creates a new role
   * @param {CreateRoleInput} createRoleInput - The input data for creating a role
   * @returns {Role} - A message indicating the role has been created
   */
  async createRole(createRoleInput: CreateRoleInput): Promise<Role> {
    try {
      return this.prismaService.role.create({
        data: {
          ...createRoleInput,
        },
      });
    } catch (error) {
      this.handler.handleError(error, {
        service: 'RolesService',
        method: 'createRole',
        operation: 'createRole',
        metadata: {
          input: createRoleInput,
        },
      });
    }
  }

  /**
   * @method findAllRoles
   * @description Retrieves all roles
   * @returns {Promise<Role[]>} - A promise that resolves to an array of roles
   */
  async findAllRoles(): Promise<Role[]> {
    try {
      return this.prismaService.role.findMany();
    } catch (error) {
      this.handler.handleError(error, {
        service: 'RolesService',
        method: 'findAllRoles',
        operation: 'findAllRoles',
      });
    }
  }

  /**
   * @method findOneRole
   * @description Retrieves a role by ID
   * @param {number} id - The ID of the role to retrieve
   * @returns {Promise<Role>} - A promise that resolves to the role
   */
  async findOneRole(roleName: string): Promise<Role> {
    try {
      await this.validateRoleName(roleName);
      const role = await this.prismaService.role.findUnique({
        where: { name: roleName },
      });
      if (!role) {
        throw new NotFoundException(`Role ${roleName} not found`);
      }
      return role;
    } catch (error) {
      this.handler.handleError(error, {
        service: 'RolesService',
        method: 'findOneRole',
        operation: 'findOneRole',
        metadata: {
          role: roleName,
        },
      });
    }
  }

  /**
   * @method assignRoleToUser
   * @description Assigns a role to a user
   * @param {number} userId - The ID of the user to assign the role to
   * @param {string} roleName - The name of the role to assign
   * @returns {Promise<UserRole>} - A promise that resolves to the assigned role
   */
  async assignRoleToUser(
    assignerId: number,
    userId: number,
    roleName: string,
  ): Promise<UserRole> {
    try {
      return await this.prismaService.$transaction(async (tx) => {
        const user = await tx.user.findUnique({
          where: { id: userId },
          select: { id: true },
        });
        if (!user) {
          throw new NotFoundException(`User with ID ${userId} not found`);
        }

        const role = await tx.role.findUnique({
          where: { name: roleName },
          select: { id: true },
        });
        if (!role) {
          throw new NotFoundException(`Role '${roleName}' not found`);
        }

        const existingAssignment = await tx.userRole.findUnique({
          where: { userId_roleId: { userId, roleId: role.id } },
          select: { userId: true },
        });

        if (existingAssignment) {
          throw new ConflictException(
            `User already has role '${roleName}'`,
            `User ID: ${userId}, Role: ${roleName}`,
          );
        }

        return await tx.userRole.create({
          data: {
            userId,
            roleId: role.id,
            assignedBy: assignerId,
          },
          include: {
            role: true,
            user: {
              select: {
                id: true,
                username: true,
                email: true,
              },
            },
          },
        });
      });
    } catch (error) {
      this.handler.handleError(error, {
        service: 'RolesService',
        method: 'assignRoleToUser',
        metadata: {
          assignerId,
          userId,
          roleName,
        },
      });
    }
  }

  /**
   * @method removeRoleFromUser
   * @description Removes a role from a user
   * @param {number} userId - The ID of the user to remove the role from
   * @param {string} roleName - The name of the role to remove
   * @returns {Promise<UserRole>} - A promise that resolves to the removed role
   */
  async removeRoleFromUser(
    userId: number,
    roleName: string,
  ): Promise<UserRole> {
    try {
      return await this.prismaService.$transaction(async (tx) => {
        const user = await tx.user.findUnique({
          where: { id: userId },
          select: { id: true },
        });
        if (!user) {
          throw new NotFoundException(`User with ID ${userId} not found`);
        }

        const role = await tx.role.findUnique({
          where: { name: roleName },
          select: { id: true },
        });
        if (!role) {
          throw new NotFoundException(`Role '${roleName}' not found`);
        }

        const existingAssignment = await tx.userRole.findUnique({
          where: { userId_roleId: { userId, roleId: role.id } },
          select: { roleId: true },
        });

        if (!existingAssignment) {
          throw new NotFoundException(
            `User does not have role '${roleName}'`,
            `User ID: ${userId}, Role: ${roleName}`,
          );
        }

        return await tx.userRole.delete({
          where: {
            userId_roleId: {
              roleId: existingAssignment.roleId,
              userId,
            },
          },
          include: {
            role: true,
            user: {
              select: {
                id: true,
                username: true,
                email: true,
              },
            },
          },
        });
      });
    } catch (error) {
      this.handler.handleError(error, {
        service: 'RolesService',
        method: 'removeRoleFromUser',
        metadata: {
          userId,
          roleName,
        },
      });
    }
  }

  /**
   * @method getUserRoles
   * @description Retrieves all roles assigned to a user
   * @param {number} userId - The ID of the user to retrieve roles for
   * @returns {Promise<Role[]>} - A promise that resolves to an array of roles
   */
  async getUserRoles(userId: number): Promise<Role[]> {
    try {
      const userRoles = await this.prismaService.userRole.findMany({
        where: { userId },
        include: {
          role: true,
        },
      });

      return userRoles.map((userRole) => userRole.role);
    } catch (error) {
      this.handler.handleError(error, {
        service: 'RolesService',
        method: 'getUserRoles',
        operation: 'getUserRoles',
        metadata: {
          userId,
        },
      });
    }
  }
}
