import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './types/create-role.input';
import { UserRole } from 'src/@generated';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { AuthenticatedUser } from 'src/auth/types/auth.types';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

/**
 * @class RolesResolver
 * @description manages mutation and query used for role management
 */
@Resolver(() => Role)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  /**
   * Creates a new role.
   * @param {CreateRoleInput} createRoleInput - Input data for creating a role.
   * @returns {Promise<Role>} The created role.
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('superadmin')
  @Mutation(() => Role)
  async createRole(
    @Args('createRoleInput') createRoleInput: CreateRoleInput,
  ): Promise<Role> {
    return this.rolesService.createRole(createRoleInput);
  }

  /**
   * Retrieves all roles.
   * @returns {Promise<Role[]>} A list of all roles.
   */
  @Query(() => [Role], { name: 'roles' })
  async findAllRoles(): Promise<Role[]> {
    return await this.rolesService.findAllRoles();
  }

  /**
   * Retrieves a single role by its ID.
   * @param {number} roleId - The ID of the role to retrieve.
   * @returns {Promise<Role>} The role with the specified ID.
   */
  @Query(() => Role, { name: 'role' })
  async findOneRole(@Args('roleName') roleName: string): Promise<Role> {
    return this.rolesService.findOneRole(roleName);
  }

  /**
   * Assigns a role to a user.
   * @param {number} userId - The ID of the user.
   * @param {string} roleName - The name of the role to assign.
   * @returns {Promise<UserRole>} The assigned role.
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('superadmin')
  @Mutation(() => UserRole)
  async assignRoleToUser(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Args('userId', { type: () => Int }) userId: number,
    @Args('roleName') roleName: string,
  ): Promise<UserRole> {
    return await this.rolesService.assignRoleToUser(
      currentUser.userId,
      userId,
      roleName,
    );
  }

  /**
   * Removes a role from a user.
   * @param {number} userId - The ID of the user.
   * @param {string} roleName - The name of the role to remove.
   * @returns {Promise<UserRole>} The removed role.
   */
  /**
   * @method removeRoleFromUser
   * @description removes a role from user
   * @param userId
   * @param roleName
   * @returns
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('superadmin')
  @Mutation(() => UserRole)
  async removeRoleFromUser(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('roleName') roleName: string,
  ): Promise<UserRole> {
    return await this.rolesService.removeRoleFromUser(userId, roleName);
  }
}
