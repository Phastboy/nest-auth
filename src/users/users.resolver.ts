import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { Role } from '@prisma/client';
import { CurrentUser } from '../auth/current-user/current-user.decorator';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { AuthenticatedUser } from 'src/interfaces/auth.types';

/**
 * GraphQL resolver for user-related operations.
 * Handles queries and mutations for user management.
 * Uses JWT authentication and role-based authorization.
 */
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Creates a new user.
   * @param {CreateUserInput} createUserInput - The input data for creating a user.
   * @returns {Promise<User>} - The newly created user.
   */
  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  /**
   * Retrieves all users.
   * Requires authentication and specific roles (ADMIN, FACULTY_DEAN, or SUPER_ADMIN).
   * @returns {Promise<User[]>} - An array of all users.
   */
  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.FACULTY_DEAN, Role.SUPER_ADMIN)
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * Retrieves a single user by ID.
   * Requires authentication.
   * @param {number} id - The ID of the user to retrieve.
   * @returns {Promise<User>} - The requested user.
   */
  @Query(() => User, { name: 'user' })
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  /**
   * Updates an existing user.
   * Requires authentication and role-based authorization.
   * @param {UpdateUserInput} updateUserInput - The input data for updating the user.
   * @param {AuthenticatedUser} user - The currently authenticated user (injected).
   * @returns {Promise<User>} - The updated user.
   */
  @Mutation(() => User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.usersService.update(
      updateUserInput.id,
      updateUserInput,
      user.role,
    );
  }

  /**
   * Deletes a user by ID.
   * Requires authentication and specific roles (ADMIN or SUPER_ADMIN).
   * @param {number} id - The ID of the user to delete.
   * @returns {Promise<User>} - The deleted user.
   */
  @Mutation(() => User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
