import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleInput } from './types/create-role.input';
import { UpdateRoleInput } from './types/update-role.input';
import { PrismaService } from 'nestjs-prisma';
import { Role, UserRole } from '@prisma/client';
import { ErrorHandler } from 'src/error-handler/error.util';

/**
 * @class RolesService
 * @description Service for managing roles
 */
@Injectable()
export class RolesService {
  constructor(
    private readonly prismaService: PrismaService, 
    private readonly handler: ErrorHandler) {}

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
    this.handler.handleError(error,
      {
        service: 'RolesService',
        method: 'createRole',
        operation: 'createRole',
        metadata: {
          input: createRoleInput,
        },
      })
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
      this.handler.handleError(error,
        {
          service: 'RolesService',
          method: 'findAllRoles',
          operation: 'findAllRoles',
        })
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
      const role = await this.prismaService.role.findUnique({
        where: { name: roleName },
      });
      if (!role) {
        throw new NotFoundException(`Role ${roleName} not found`);
      }
      return role;
    } catch (error) {
      this.handler.handleError(error,
        {
          service: 'RolesService',
          method: 'findOneRole',
          operation: 'findOneRole',
          metadata: {
            role: roleName,
          },
        })
    }
  }

  /**
   * @method updateRole
   * @description Updates a role by ID
   * @param {number} id - The ID of the role to update
   * @param {UpdateRoleInput} updateRoleInput - The input data for updating the role
   * @returns {Promise<Role>} - A promise that resolves to the updated role
   */
  async updateRole(
    id: number,
    updateRoleInput: UpdateRoleInput
  ): Promise<Role> {
    try {
      return this.prismaService.role.update({
        where: { id },
        data: {
          ...updateRoleInput,
        },
      });
    } catch (error) {
      this.handler.handleError(error,
        {
          service: 'RolesService',
          method: 'updateRole',
          operation: 'updateRole',
          metadata: {
            id,
            input: updateRoleInput,
          },
        })
    }
  }

  /**
   * @method removeRole
   * @description Removes a role by ID
   * @param {number} id - The ID of the role to remove
   * @returns {string} - A message indicating the role has been removed
   */
  async removeRole(roleName: string): Promise<Role> {
    try {
      return this.prismaService.role.delete({
        where: { name: roleName },
      });
    } catch (error) {
      this.handler.handleError(error,
        {
          service: 'RolesService',
          method: 'removeRole',
          operation: 'removeRole',
          metadata: {
            roleName,
          },
        }
      )
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
    userId: number,
    roleName: string
  ): Promise<UserRole> {
    try {
      const role = await this.findOneRole(roleName);

      return await this.prismaService.userRole.create({
        data: {
          userId,
          roleId: role.id,
        },
        include: {
          role: true,
        },
      });
    } catch (error) {
      this.handler.handleError(error,
        {
          service: 'RolesService',
          method: 'assignRoleToUser',
          operation: 'assignRoleToUser',
          metadata: {
            userId,
            roleName,
          },
        }
      );
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
    roleName: string
  ): Promise<UserRole> {
    try {
      const role = await this.findOneRole(roleName);

      return await this.prismaService.userRole.delete({
        where: {
          userId_roleId: {
            userId,
            roleId: role.id,
          },
        },
      });
    } catch (error) {
      this.handler.handleError(error,
        {
          service: 'RolesService',
          method: 'removeRoleFromUser',
          operation: 'removeRoleFromUser',
          metadata: {
            userId,
            roleName,
          },
        }
      );
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
      this.handler.handleError(error,
        {
          service: 'RolesService',
          method: 'getUserRoles',
          operation: 'getUserRoles',
          metadata: {
            userId,
          },
        }
      );
    }
  }
}
