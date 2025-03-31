import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, TokenPair } from 'src/auth/types/auth.types';
import { UserWithoutPassword } from 'src/users/users.types';
import { UsersService } from 'src/users/users.service';
import * as argon from 'argon2';
import { LoginInput } from './types/login.input';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * validates the user credentials
   * @param {LoginInput} loginInput
   * @returns {Promise<UserWithoutPassword>}
   * @throws {UnauthorizedException} if the credentials are invalid
   */
  async validateUser(loginInput: LoginInput): Promise<UserWithoutPassword> {
    const { email, password } = loginInput;
    this.logger.debug(`validating user with email: ${email}`);
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await argon.verify(user.password, password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * generates JWT tokens
   * @param {UserWithoutPassword} user
   * @returns {Promise<Tokens>}
   */
  async generateTokens(user: UserWithoutPassword): Promise<TokenPair> {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
      secret: process.env.JWT_ACCESS_SECRET || 'defaultAccessSecret',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
      secret: process.env.JWT_REFRESH_SECRET || 'defaultRefreshSecret',
    });
    return { accessToken, refreshToken };
  }
}
