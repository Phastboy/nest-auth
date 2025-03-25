import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, Tokens } from 'src/interfaces/auth.types';
import { UserWithoutPassword } from 'src/interfaces/user.types';
import { UsersService } from 'src/users/users.service';
import * as argon from 'argon2';
import { LoginDto } from './dto/login.input';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginDto): Promise<UserWithoutPassword> {
    try {
      const user = await this.usersService.findByEmail(loginDto.email);

      // User doesn't exist
      if (!user) {
        this.logger.warn(
          `Login attempt with non-existent email: ${loginDto.email}`,
        );
        throw new UnauthorizedException('User with this email does not exist');
      }

      // check password validity
      const isPasswordValid = await argon.verify(
        user.password,
        loginDto.password,
      );
      if (!isPasswordValid) {
        this.logger.warn(
          `Incorrect password attempt for email: ${loginDto.email}`,
        );
        throw new UnauthorizedException('Incorrect password');
      }

      // Remove password before returning the user
      const userWithoutPassword: UserWithoutPassword = {
        ...user,
      };
      return userWithoutPassword;
    } catch (error: any) {
      if (error instanceof Error)
        this.logger.error(
          `Error during user validation for email: ${loginDto.email}`,
          error.stack,
        );
      throw error;
    }
  }

  generateTokens(user: UserWithoutPassword): Tokens {
    const payload: JwtPayload = {
      email: user.email,
      sub: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn: '1h',
      }),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: '7d',
      }),
    };
  }

  async refreshTokens(userId: number, refreshToken: string) {
    try {
      // Remove quotes if present
      const cleanToken = refreshToken.replace(/^"(.*)"$/, '$1');

      const payload = this.jwtService.verify(cleanToken);

      if (payload.sub !== userId) {
        throw new UnauthorizedException('Invalid user for refresh token');
      }

      const user = await this.usersService.findOne(payload.sub);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      return this.generateTokens(user);
    } catch (error) {
      this.logger.error('Refresh token validation failed', error.message);
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
