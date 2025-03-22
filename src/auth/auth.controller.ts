import {
  Controller,
  Post,
  Body,
  Res,
  Req,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { LocalAuthGuard } from './auth.guard';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import {
  AuthenticatedRequest,
  AuthenticatedUser,
  Tokens,
} from 'src/interfaces/auth.types';
import { UsersService } from 'src/users/users.service';
import { UserCreateInput } from 'src/@generated';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: UserCreateInput) {
    return await this.usersService.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(
    @Body() loginDto: LoginDto,
    @Req() req: AuthenticatedRequest,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user }: { user: AuthenticatedUser } = req;
    const tokens: Tokens = this.authService.generateTokens(user);
    res.setHeader('Authorization', `Bearer ${tokens.accessToken}`);
    return { message: 'Login successful', accessToken: tokens.accessToken };
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Req() req: AuthenticatedRequest) {
    const { user }: { user: AuthenticatedUser } = req;
    return user;
  }
}
