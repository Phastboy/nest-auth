import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { LoginDto } from '../dto/login.dto';
import { AuthenticatedUser } from 'src/interfaces/auth.types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<AuthenticatedUser> {
    const loginDto: LoginDto = { email, password };
    const user = await this.authService.validateUser(loginDto);
    return {
      userId: user.id,
      email: user.email,
    };
  }
}
