import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthenticatedUser, JwtPayload } from 'src/auth/types/auth.types';
import { JwtService } from '@nestjs/jwt';

/**
 * Strategy for validating refresh tokens.
 * This strategy extracts the refresh token from the request headers
 * and verifies it using the JWT service.
 */
@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  private readonly logger = new Logger(RefreshTokenStrategy.name);

  constructor(private readonly jwtService: JwtService) {
    super({
      jwtFromRequest: (req: Request) => {
        const token = req.headers['x-refresh-token'];
        if (!token) {
          this.logger.verbose('No refresh token in headers');
          return null;
        }

        // Remove surrounding quotes if present
        let refreshToken = Array.isArray(token) ? token[0] : token;
        refreshToken = refreshToken.replace(/^"(.*)"$/, '$1');

        this.logger.debug(
          `Extracted refresh token (${refreshToken.substring(0, 10)}...)`,
        );
        return refreshToken;
      },
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_REFRESH_SECRET || 'defaultRefreshSecret',
      passReqToCallback: true,
    });
  }

  async validate(
    req: Request,
    payload: JwtPayload,
  ): Promise<AuthenticatedUser> {
    this.logger.debug(`Starting validation for user ${payload.sub}`);

    const token = req.headers['x-refresh-token'];
    if (!token) {
      this.logger.error('Refresh token missing in validate()');
      throw new Error('Refresh token not found');
    }

    // Remove surrounding quotes if present
    let refreshToken = Array.isArray(token) ? token[0] : token;
    refreshToken = refreshToken.replace(/^"(.*)"$/, '$1');

    this.logger.debug(
      `Validating refresh token (${refreshToken.substring(0, 10)}...)`,
    );

    try {
      // Verify using the refresh token secret
      const decoded = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_SECRET || 'JWT_SECRET',
      });

      this.logger.debug(`Token verified for user ${decoded.sub}`);

      return {
        userId: decoded.sub,
        email: decoded.email,
        role: decoded.role,
      };
    } catch (error) {
      this.logger.error('Token verification failed:', error.message);
      throw new Error('Invalid refresh token');
    }
  }
}
