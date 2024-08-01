import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../schemas/user.schema';
import * as crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';

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
    if (user && (await this.verifyPassword(pass, user.password, user.salt))) {
      return user;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  /**
   * Register a new user.
   * @param createUserDto - Data transfer object containing user data.
   * @returns The newly created user document.
   */
  async register(createUserDto: CreateUserDTO): Promise<User> {
    const salt = this.generateSalt();
    const hashedPassword = await this.hashPassword(
      createUserDto.password,
      salt,
    );
    const user = {
      ...createUserDto,
      password: hashedPassword,
      salt: salt,
    };
    return this.usersService.create(user);
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
    console.table(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /**
   * Generate a salt for password hashing.
   * @returns The generated salt.
   */
  private generateSalt(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  /**
   * Hash a password.
   * @param password - The password to hash.
   * @param salt - The salt to use for hashing.
   * @returns The hashed password.
   */
  private async hashPassword(password: string, salt: string): Promise<string> {
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, derivedKey) => {
        if (err) reject(err);
        resolve(derivedKey.toString('hex'));
      });
    });
  }

  /**
   * Verify a password against a hashed password.
   * @param password - The password to verify.
   * @param hash - The hashed password.
   * @param salt - The salt used to hash the password.
   * @returns True if the password is valid, false otherwise.
   */
  private async verifyPassword(
    password: string,
    hash: string,
    salt: string,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, derivedKey) => {
        if (err) reject(err);
        resolve(hash === derivedKey.toString('hex'));
      });
    });
  }
}
