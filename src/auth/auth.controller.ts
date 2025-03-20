import {
  Controller,
  Post,
  Body,
  Res,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './auth.guard';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Tokens } from 'src/interfaces/auth.types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Request() req: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tokens: Tokens = this.authService.generateTokens(await req.user);
    res.setHeader('Authorization', `Bearer ${tokens.accessToken}`);
    return { message: 'Login successful', accessToken: tokens.accessToken };
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req: any) {
    return await req.user;
  }
}
