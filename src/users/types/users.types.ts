import { Prisma } from '@prisma/client';

/**
 * Represents a user entity without the password field for security.
 */
export type UserWithoutPassword = Omit<Prisma.UserGetPayload<{}>, 'password'>;

/**
 * Default relations to include when querying for users.
 * Includes posts, events, likes, comments, and unread notifications.
 */
export const DEFAULT_USER_INCLUDES = {
  roles: {
    include: {
      role: true,
    },
  },
  _count: true,
} satisfies Prisma.UserInclude;

/**
 * Represents a user entity with all default relations included.
 */
export type UserWithRelations = Prisma.UserGetPayload<{
  include: typeof DEFAULT_USER_INCLUDES;
}>;

/**
 * Response type for user operations, excluding the password field.
 */
export type UserResponse = Omit<UserWithRelations, 'password'>;

/**
 * Privileged roles that have special access in the system.
 * These roles cannot be self-assigned during registration.
 */
export const PrivilegedRole = [
  'superadmin',
  'admin',
  'dean',
  'registrar',
  'hod',
];
