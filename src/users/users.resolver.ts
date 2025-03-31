import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/update-user.input';
import { ErrorHandler } from 'src/error-handler/error.util';
import { AppLogger } from 'src/app.logger';
import { UserResponse } from './users.types';

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
   * @returns {Promise<User>} - The updated user object.
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
   * @returns {Promise<User>} - The deleted user object.
   */
  @Mutation(() => User, {
    name: 'deleteUser',
    description: 'Deletes a user by ID',
  })
  async deleteUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<UserResponse> {
    this.logger.logDebug(`removing user ...`, {
      metadata: {
        id,
      },
    });
    const user = await this.usersService.deleteUser(id);
    this.logger.info(`user removed successfully`, {
      metadata: {
        user,
      },
    });
    return user;
  }
}
