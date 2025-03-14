import { User } from '@prisma/client';
import { Omit } from '@prisma/client/runtime/library';

export type UserWithoutPassword = Omit<User, 'password'>;
