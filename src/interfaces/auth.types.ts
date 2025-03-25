import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tokens {
  @Field(() => String, {
    nullable: false,
  })
  accessToken: string;

  @Field(() => String, {
    nullable: false,
  })
  refreshToken: string;
}

@ObjectType()
export class JwtPayload {
  @Field(() => String, {
    nullable: false,
  })
  email: string;

  @Field(() => ID, {
    nullable: false,
  })
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
