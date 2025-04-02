import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './types/create-role.input';
import { UpdateRoleInput } from './types/update-role.input';
import { UserRole } from 'src/@generated';

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
  @Mutation(() => Role)
  async createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput): Promise<Role> {
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
  async findOneRole(@Args('roleName') roleName: string) {
    return this.rolesService.findOneRole(roleName);
  }

  /**
   * Updates an existing role.
   * @param {number} roleId - The ID of the role to update.
   * @param {UpdateRoleInput} updateRoleInput - Input data for updating the role.
   * @returns {Promise<Role>} The updated role.
   */
  @Mutation(() => Role)
  async updateRole(
    @Args('roleId', { type: () => Int }) roleId: number,
    @Args('updateRoleInput') updateRoleInput: UpdateRoleInput,
  ): Promise<Role> {
    return await this.rolesService.updateRole(roleId, updateRoleInput);
  }

  /**
   * Removes a role by its ID.
   * @param {string} roleName - The ID of the role to remove.
   * @returns {Promise<Role>} The removed role.
   */
  @Mutation(() => Role)
  async removeRole(@Args('roleName', { type: () => Int }) roleName: string): Promise<Role> {
    return await this.rolesService.removeRole(roleName);
  }

  /**
   * Assigns a role to a user.
   * @param {number} userId - The ID of the user.
   * @param {string} roleName - The name of the role to assign.
   * @returns {Promise<UserRole>} The assigned role.
   */
  @Mutation(() => UserRole)
  async assignRoleToUser(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('roleName') roleName: string,
  ):Promise<UserRole> {
    return await this.rolesService.assignRoleToUser(userId, roleName);
  }

  /**
   * Removes a role from a user.
   * @param {number} userId - The ID of the user.
   * @param {string} roleName - The name of the role to remove.
   * @returns {Promise<UserRole>} The removed role.
   */
  @Mutation(() => UserRole)
  async removeRoleFromUser(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('roleName') roleName: string,
  ): Promise<UserRole> {
    return await this.rolesService.removeRoleFromUser(userId, roleName);
  }

  /**
   * Retrieves all roles assigned to a user.
   * @param {number} userId - The ID of the user.
   * @returns {Promise<Role[]>} A list of roles assigned to the user.
   */
  @Query(() => [Role], { name: 'userRoles' })
  async getUserRoles(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<Role[]> {
    if (!userId) {
      throw new Error('User ID is required');
    }
    return await this.rolesService.getUserRoles(userId);
  }
}
