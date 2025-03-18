import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { UserWithoutPassword } from 'src/interfaces/user.types';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(
    email: string,
    password: string,
  ): Promise<UserWithoutPassword> {
    try {
      const loginDto: LoginDto = { email, password };
      return await this.authService.validateUser(loginDto);
    } catch (error) {
      throw error;
    }
  }
}
