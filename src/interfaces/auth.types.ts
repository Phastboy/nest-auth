import { Field, ID, ObjectType } from '@nestjs/graphql';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface JwtPayload {
  email: string;
  sub: number;
}

@ObjectType()
export class AuthenticatedUser {
  @Field(() => ID, {
    nullable: false,
  })
  userId: number;

  @Field(() => String, {
    nullable: false,
  })
  email: string;

  @Field(() => String, {
    nullable: true,
  })
  refreshToken: string;
}
