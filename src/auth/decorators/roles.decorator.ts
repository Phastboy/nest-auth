import { SetMetadata } from '@nestjs/common';
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
 * @Roles('role1', 'role2')
 * someProtectedMethod() { ... }
 */
export const Roles = (...roles: string[]): Function =>
  SetMetadata(ROLES_KEY, roles);
