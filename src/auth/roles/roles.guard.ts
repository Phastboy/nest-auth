import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { ROLES_KEY } from './roles.decorator';

/**
 * Role-based authorization guard.
 * Checks if the current user has any of the required roles specified in the @Roles() decorator.
 *
 * @example
 * @UseGuards(JwtAuthGuard, RolesGuard)
 * @Roles(Role.ADMIN, Role.SUPER_ADMIN)
 * someProtectedMethod() { ... }
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  /**
   * Determines if the current request is authorized based on user roles.
   * @param {ExecutionContext} context - The execution context containing request details.
   * @returns {boolean} - True if authorized, false otherwise.
   * @throws {ForbiddenException} - If no user role is found or access is denied.
   */
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;

    if (!user || !user.role) {
      throw new ForbiddenException('No user role found');
    }

    return requiredRoles.some((role) => user.role === role);
  }
}
