import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Tokens } from 'src/interfaces/auth.types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: CreateUserDto) {
    return await this.authService.create(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<Tokens> {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    return await this.authService.login(user);
  }
}
