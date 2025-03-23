import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticatedUser, Payload, Tokens } from 'src/interfaces/auth.types';
import { UserWithoutPassword } from 'src/interfaces/user.types';
import { UsersService } from 'src/users/users.service';
import * as argon from 'argon2';
import { LoginDto } from './dto/login.dto';

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

  generateTokens(user: AuthenticatedUser): Tokens {
    const payload: Payload = {
      email: user.email,
      sub: user.userId,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }
}
