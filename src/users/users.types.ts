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
  posts: { select: { id: true, content: true, createdAt: true } },
  events: { select: { id: true, title: true, startTime: true } },
  likes: { select: { id: true, createdAt: true } },
  comments: { select: { id: true, content: true, createdAt: true } },
  notifications: {
    where: { isRead: false },
    select: { id: true, type: true, content: true },
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
export type PrivilegedRole =
  | 'SUPER_ADMIN'
  | 'FACULTY_DEAN'
  | 'REGISTRAR'
  | 'DEPARTMENT_HEAD';
