import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, Tokens } from 'src/interfaces/auth.types';
import { UserWithoutPassword } from 'src/interfaces/user.types';
import { UsersService } from 'src/users/users.service';
import * as argon from 'argon2';
import { LoginDto } from './dto/login.input';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
}
