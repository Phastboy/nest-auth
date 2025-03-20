import { Request } from 'express';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface Payload {
  email: string;
  sub: number;
}

export interface UserObject {
  email: string;
  userId: number;
}

export type AuthenticatedUser = {
  userId: number;
  email: string;
};

export interface AuthenticatedRequest extends Request {
  user: AuthenticatedUser;
}
