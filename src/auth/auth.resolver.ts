import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from 'src/@generated';
import { CreateUserInput } from 'src/users/types/create-user.input';
import { UsersService } from 'src/users/users.service';
import { AppLogger } from 'src/app.logger';
import { UserResponse } from 'src/users/types/users.types';
import { ErrorHandler } from 'src/error-handler/error.util';
import { AuthResponse } from './types/auth.types';
import { LoginInput } from './types/login.input';
import { RefreshToken } from './decorators/refresh-token.decorator';

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

  /**
   * Logs in a user and returns a token pair.
   * @param {LoginInput} loginInput - The input data for logging in.
   * @returns {Promise<AuthResponse>} - The authentication response containing the token pair and message.
   */
  @Mutation(() => AuthResponse, {
    name: 'login',
    description: 'for logging in a user',
  })
  async login(
    @Args('loginInput') loginInput: LoginInput,
  ): Promise<AuthResponse> {
    this.logger.logDebug(`logging in user ...`, {
      metadata: {
        loginInput,
      },
    });
    const user = await this.authService.validateUser(loginInput);
    const tokens = await this.authService.generateTokens(user);
    this.logger.info(`user logged in successfully`, {
      metadata: {
        user,
        tokens,
      },
    });
    return {
      message: 'Login successful',
      tokens,
    };
  }

  /**
   * refreshes the access token using the refresh token.
   * @param {string} refreshToken - The refresh token used to obtain a new access token.
   * @returns {Promise<AuthResponse>} - The authentication response containing the new token pair and message.
   */
  @Mutation(() => AuthResponse, {
    name: 'refreshTokens',
    description: 'for refreshing access token and refresh token',
  })
  async refreshTokens(
    @RefreshToken() refreshToken: string,
  ): Promise<AuthResponse> {
    this.logger.logDebug(`refreshing tokens ...`, {
      metadata: {
        refreshToken,
      },
    });
    const tokens = await this.authService.refreshTokens(refreshToken);
    this.logger.info(`token refreshed successfully`, {
      metadata: {
        tokens,
      },
    });
    return {
      message: 'Tokens refreshed successfully',
      tokens,
    };
  }
}
