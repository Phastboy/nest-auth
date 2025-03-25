import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tokens {
  @Field(() => String)
  accessToken: String;

  @Field(() => String)
  refreshToken: String;
}
