import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginDto } from './dto/login.input';
import { Tokens } from './dto/token.type';
import { User } from 'src/@generated';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { UsersService } from 'src/users/users.service';
import { CurrentUser } from './current-user/current-user.decorator';
import { AuthenticatedUser } from 'src/interfaces/auth.types';
import { Logger, UnauthorizedException, UseGuards } from '@nestjs/common';
import { RefreshTokenAuthGuard } from './jwt/refresh.guard';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  private readonly logger = new Logger(AuthResolver.name);

  @Mutation(() => User, {
    name: 'register',
    description: 'for creating a new user',
  })
  async register(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Mutation(() => LoginResponse, {
    name: 'login',
  })
  async login(@Args('loginInput') loginInput: LoginDto) {
    const tokens: Tokens = this.authService.generateTokens(
      await this.authService.validateUser(loginInput),
    );
    return {
      message: 'logged successfully',
      tokens,
    };
  }

  @UseGuards(RefreshTokenAuthGuard)
  @Mutation(() => Tokens, {
    name: 'refreshTokens',
    description: 'resfreshes access and refresh tokens',
  })
  async refreshTokens(@CurrentUser() user: AuthenticatedUser) {
    this.logger.debug(`current user: ${JSON.stringify(user)}`);
    const refreshToken = user.refreshToken;
    if (!refreshToken)
      throw new UnauthorizedException('refreshToken not found');
    return await this.authService.refreshTokens(user.userId, refreshToken);
  }
}
