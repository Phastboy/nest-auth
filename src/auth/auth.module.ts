import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshTokenStrategy } from './strategies/refresh.strategy';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'JWT_SECRET',
    }),
    PassportModule,
  ],
  providers: [
    AuthResolver,
    AuthService,
    UsersService,
    JwtStrategy,
    RefreshTokenStrategy,
  ],
})
export class AuthModule {}
