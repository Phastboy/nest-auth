import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/dto/create-user.dto';
import { JwtAuthGuard } from './gaurds/jwt-auth/jwt-auth.guard';
import { RolesGuard } from './gaurds/role/role.guard';
import { Roles } from './decorators/roles/roles.decorator';
import { LoginAuthDTO } from './dto/login-auth.dto';

/**
 * Auth Controller
 * Handles HTTP requests related to authentication.
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Register a new user.
   * @param createUserDto - Data transfer object containing user data.
   * @returns The newly created user document.
   */
  @Post('register')
  async register(@Body() createUserDto: CreateUserDTO) {
    return this.authService.register(createUserDto);
  }

  /**
   * Log in an existing user.
   * @param req - The HTTP request object.
   * @returns An object containing the access token.
   */
  @Post('login')
  async login(@Body() body: LoginAuthDTO) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    return this.authService.login(user);
  }

  /**
   * Access a protected route.
   * @returns A message indicating successful access.
   */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  /**
   * Access a protected admin route.
   * @returns A message indicating successful access.
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('admin')
  getAdmin(@Request() req) {
    return req.user;
  }
}
