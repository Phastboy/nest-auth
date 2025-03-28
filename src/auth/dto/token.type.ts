import { Field, ObjectType } from '@nestjs/graphql';

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
