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
