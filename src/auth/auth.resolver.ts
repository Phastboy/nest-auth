import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginDto } from './dto/login.input';
import { Tokens } from './dto/token.type';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

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
