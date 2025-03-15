import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Tokens } from 'src/interfaces/auth.types';
import { UserWithoutPassword } from 'src/interfaces/user.types';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async create(userData: CreateUserDto): Promise<UserWithoutPassword> {
    return await this.usersService.create(userData);
  }

  async login(loginDto: LoginDto): Promise<Tokens> {
    const user = await this.usersService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }
}
