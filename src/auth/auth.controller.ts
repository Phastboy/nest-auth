import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/dto/create-user.dto';
import { User } from '../schemas/user.schema';

/**
 * Auth Controller
 * Handles HTTP requests related to authentication.
 */
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * Login a user.
   * @param body - The login credentials.
   * @returns The JWT access token.
   */
  @Post('login')
  async login(
    @Body() body: { username: string; password: string },
  ): Promise<{ access_token: string }> {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    return this.authService.login(user);
  }

  /**
   * Register a new user.
   * @param createUserDto - Data transfer object containing user data.
   * @returns The newly created user document.
   */
  @Post('register')
  async register(@Body() createUserDto: CreateUserDTO): Promise<User> {
    const hashedPassword = await this.authService.hashPassword(
      createUserDto.password,
    );
    return this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}
