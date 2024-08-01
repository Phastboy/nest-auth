import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../schemas/user.schema';
import * as crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from '../users/dto/create-user.dto';

/**
 * Auth Service
 * Handles business logic related to user authentication.
 */
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /**
   * Validate a user's credentials.
   * @param username - The username of the user.
   * @param pass - The password of the user.
   * @returns The user if credentials are valid.
   * @throws UnauthorizedException if credentials are invalid.
   */
  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.usersService.findByUsername(username);
    if (user && (await this.verifyPassword(pass, user.password))) {
      return user;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  /**
   * Generate a JWT token for a user.
   * @param user - The user for whom the token is generated.
   * @returns An object containing the access token.
   */
  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /**
   * Register a new user.
   * @param createUserDto - Data transfer object containing user data.
   * @returns The newly created user document.
   */
  async register(createUserDto: CreateUserDTO): Promise<User> {
    const hashedPassword = await this.hashPassword(createUserDto.password);
    const user = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
      role: 'user',
    });
    return user;
  }

  /**
   * Hash a password.
   * @param password - The password to hash.
   * @returns The hashed password.
   */
  async hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const salt = crypto.randomBytes(16).toString('hex');
      crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, derivedKey) => {
        if (err) reject(err);
        resolve(salt + ':' + derivedKey.toString('hex'));
      });
    });
  }

  /**
   * Verify a password against a hashed password.
   * @param password - The password to verify.
   * @param hash - The hashed password.
   * @returns True if the password is valid, false otherwise.
   */
  private async verifyPassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const [salt, key] = hash.split(':');
      crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, derivedKey) => {
        if (err) reject(err);
        resolve(key === derivedKey.toString('hex'));
      });
    });
  }
}
