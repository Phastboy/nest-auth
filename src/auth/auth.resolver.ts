import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginDto } from './dto/login.input';
import { Tokens } from './dto/token.type';
import { User } from 'src/@generated';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { UsersService } from 'src/users/users.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

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
}
