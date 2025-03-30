import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from 'src/@generated';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { UsersService } from 'src/users/users.service';
import { AppLogger } from 'src/app.logger';
import { UserResponse } from 'src/users/users.types';
import { ErrorHandler } from 'src/error-handler/error.util';

/**
 * Resolver for handling authentication-related operations.
 * @class AuthResolver
 */
@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly handler: ErrorHandler,
  ) {}

  private readonly logger = AppLogger.getInstance(AuthResolver.name);

  /**
   * Registers a new user.
   * @param {CreateUserInput} createUserInput - The input data for creating a new user.
   * @returns {Promise<User>} - The created user object.
   */
  @Mutation(() => User, {
    name: 'register',
    description: 'for creating a new user',
  })
  async register(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserResponse> {
    this.logger.logDebug(`registering user ...`, {
      metadata: {
        createUserInput,
      },
    });
    const user = await this.usersService.createUser(createUserInput);
    this.logger.info(`user registered successfully`, {
      metadata: {
        user,
      },
    });
    return user;
  }
}
