import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * JWT Auth Guard
 * Protects routes by ensuring the user is authenticated using JWT.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
