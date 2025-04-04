import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticatedUser } from '../types/auth.types';
import { PrismaService } from 'nestjs-prisma';

export interface ICurrentUser extends AuthenticatedUser {
  roles?: string[];
}
export const CurrentUser = createParamDecorator(
  async (
    data: { includeRoles?: boolean } = {},
    context: ExecutionContext,
  ): Promise<ICurrentUser> => {
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;
    if (!user?.userId) {
      throw new NotFoundException('User not found');
    }

    if (data.includeRoles) {
      const prisma = new PrismaService();
      const userWithRoles = await prisma.user.findUnique({
        where: { id: user.userId },
        select: {
          roles: {
            select: {
              role: {
                select: { name: true },
              },
            },
          },
        },
      });

      return {
        ...user,
        roles: userWithRoles?.roles.map((ur) => ur.role.name),
      };
    }
    return user;
  },
);
