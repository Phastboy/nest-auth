import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload, Tokens } from 'src/interfaces/auth.types';
import { UserWithoutPassword } from 'src/interfaces/user.types';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
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

  async create(userData: CreateUserDto): Promise<UserWithoutPassword> {
    try {
      return await this.usersService.create(userData);
    } catch (error) {
      this.logger.error(`Error creating user: ${error.message}`, error.stack);
      throw error;
    }
  }

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
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      this.logger.error(
        `Error during user validation for email: ${loginDto.email}`,
        error.stack,
      );
      throw error;
    }
  }

  generateTokens(user: UserWithoutPassword): Tokens {
    const payload: Payload = {
      email: user.email,
      sub: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }
}
