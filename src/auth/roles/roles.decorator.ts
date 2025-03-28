import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

/**
 * Metadata key used to store role information for the RolesGuard.
 */
export const ROLES_KEY = 'roles';

/**
 * Decorator that specifies which roles are required to access a particular route.
 * 
 * @param {...Role[]} roles - The roles that are allowed to access the decorated route.
 * @returns {Function} - A decorator function that sets the metadata.
 * 
 * @example
 * @Roles(Role.ADMIN, Role.SUPER_ADMIN)
 * someProtectedMethod() { ... }
 */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
