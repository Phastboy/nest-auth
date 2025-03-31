import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/@generated';

/**
 * types used for authentication
 */
@ObjectType()
export class TokenPair {
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

  @Field(() => Role, {
    nullable: false,
  })
  role: `${Role}`;
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

  @Field(() => Role, {
    nullable: false,
  })
  role: `${Role}`;
}

@ObjectType()
export class AuthResponse {
  @Field(() => String, {
    nullable: false,
  })
  message: string;

  @Field(() => TokenPair, {
    nullable: false,
  })
  tokens: TokenPair;
}
