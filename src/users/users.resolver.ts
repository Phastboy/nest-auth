import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './types/update-user.input';
import { ErrorHandler } from 'src/error-handler/error.util';
import { AppLogger } from 'src/app.logger';
import { UserResponse } from './types/users.types';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { AuthenticatedUser } from 'src/auth/types/auth.types';
import { ForbiddenException } from '@nestjs/common';

/**
 * @class UsersResolver
 * @description Resolver for managing user-related operations.
 */
@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly handler: ErrorHandler,
  ) {}

  private readonly logger = AppLogger.getInstance(UsersResolver.name);

  /**
   * find all users
   */
  @Query(() => [User], {
    name: 'findAllUsers',
    description: 'Finds all users',
  })
  async findAllUsers(): Promise<UserResponse[]> {
    this.logger.logDebug('Fetching all users...');
    const users = await this.usersService.findAllUsers();
    this.logger.info('All users fetched successfully', {
      metadata: {
        usersCount: users.length,
      },
    });
    return users;
  }

  /**
   * find user by id
   * @param {number} id - The ID of the user to find.
   * @returns {Promise<User>} - The found user object.
   * @throws {Error} - If the user is not found.
   */
  @Query(() => User, {
    name: 'findOneUser',
    description: 'Finds a user by ID',
  })
  async findOneUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<UserResponse> {
    return await this.usersService.findUserById(id);
  }

  /**
   * Updates a user's details.
   * @param {number} id - The ID of the user to update.
   * @param {UpdateUserInput} updateUserInput - The input data for updating the user.
   * @returns {Promise<UserResponse>} - The updated user object.
   */
  @Mutation(() => User, {
    name: 'updateUser',
    description: 'Updates a user by ID',
  })
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<UserResponse> {
    this.logger.logDebug(`updating user ...`, {
      metadata: {
        id,
        updateUserInput,
      },
    });
    const user = await this.usersService.updateUser(id, updateUserInput);
    this.logger.info(`user updated successfully`, {
      metadata: {
        user,
      },
    });
    return user;
  }

  /**
   * Deletes a user by ID.
   * @param {number} id - The ID of the user to delete.
   * @returns {Promise<UserResponse>} - The deleted user object.
   */
  @Mutation(() => User, {
    name: 'deleteUser',
    description: 'Deletes a user by ID',
  })
  async deleteUser(
    @Args('userId', { type: () => Int }) userId: number,
    @CurrentUser() currentUser: AuthenticatedUser,
  ): Promise<UserResponse> {
    try{
    if (currentUser.userId !== userId) {
      throw new ForbiddenException(
        'You are not allowed to delete this user',
        {
          description: 'User is trying to delete another user, you can only delete your own account',
        }
      );
    }
    this.logger.logDebug(`removing user ...`, {
      metadata: {
        userId,
      },
    });
    const user = await this.usersService.deleteUser(userId);
    this.logger.info(`user removed successfully`, {
      metadata: {
        user,
      },
    });
    return user;
  }catch (error) {
    this.handler.handleError(error, {
      operation: 'deleteUser',
      service: 'UsersService',
      metadata: {
        userId,
        currentUser,
      },
    });
  }
}
}
