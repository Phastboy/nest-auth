import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { PrismaService } from 'nestjs-prisma';
import { AppLogger } from 'src/app.logger';
import { ErrorHandler } from 'src/error-handler/error.util';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
    private readonly handler: ErrorHandler
  ) {}

  private readonly logger = new AppLogger(RolesGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) return true;

    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;

    if (!user) {
      throw new ForbiddenException('User not found');
    }

    try {
      const userWithRoles = await this.prisma.user.findUnique({
        where: { id: user.userId },
        select: {
          roles: {
            select: {
              role: {
                select: { name: true }
              }
            }
          }
        }
      });

      this.logger.debug(
        `User with roles: ${JSON.stringify(userWithRoles)}`
      );

      // Check if the user has any roles
      if (!userWithRoles?.roles || userWithRoles.roles.length === 0) {
        throw new ForbiddenException('User has no roles');
      }
      const userRoles = userWithRoles?.roles.map(ur => ur.role.name);
      const hasRole = requiredRoles.some(role => (userRoles ?? []).includes(role));

      if (!hasRole) {
        throw new ForbiddenException(
          `user does not have the required roles: ${requiredRoles.join(
            ', '
          )}, user roles: ${userRoles?.join(', ')}`,
        );
      }

      return true;
    } catch (error) {
      this.handler.handleError(error,{
        metadata: {
          userId: user.userId,
          requiredRoles,
        }
      });
    }
  }
}