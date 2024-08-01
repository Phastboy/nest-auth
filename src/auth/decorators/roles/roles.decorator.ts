import { SetMetadata } from '@nestjs/common';

/**
 * Roles Decorator
 * Sets the roles metadata for a route.
 * @param roles - The roles required to access the route.
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
