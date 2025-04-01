import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleInput } from './types/create-role.input';
import { UpdateRoleInput } from './types/update-role.input';
import { PrismaService } from 'nestjs-prisma';
import { Role } from '@prisma/client';
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
  async findOneRole(id: number): Promise<Role> {
    try {
      const role = await this.prismaService.role.findUnique({
        where: { id },
      });
      if (!role) {
        throw new NotFoundException(`Role with ID ${id} not found`);
      }
      return role;
    } catch (error) {
      this.handler.handleError(error,
        {
          service: 'RolesService',
          method: 'findOneRole',
          operation: 'findOneRole',
          metadata: {
            id,
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
  async removeRole(id: number): Promise<Role> {
    try {
      return this.prismaService.role.delete({
        where: { id },
      });
    } catch (error) {
      this.handler.handleError(error,
        {
          service: 'RolesService',
          method: 'removeRole',
          operation: 'removeRole',
          metadata: {
            id,
          },
        })
    }
  }
}
