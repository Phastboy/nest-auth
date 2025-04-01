import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './types/create-role.input';
import { UpdateRoleInput } from './types/update-role.input';

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
  createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
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
  async findOneRole(@Args('roleId', { type: () => Int }) roleId: number) {
    return this.rolesService.findOneRole(roleId);
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
    @Args('updateRoleInput') updateRoleInput: UpdateRoleInput
  ): Promise<Role> {
    return await this.rolesService.updateRole(roleId, updateRoleInput);
  }

  /**
   * Removes a role by its ID.
   * @param {number} roleId - The ID of the role to remove.
   * @returns {Promise<Role>} The removed role.
   */
  @Mutation(() => Role)
  async removeRole(@Args('roleId', { type: () => Int }) roleId: number) {
    return await this.rolesService.removeRole(roleId);
  }
}
