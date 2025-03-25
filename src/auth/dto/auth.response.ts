import { Field, ObjectType } from '@nestjs/graphql';
import { TokenPair } from './token.type';

@ObjectType()
export class AuthResponse {
  @Field(() => String, {
    nullable: false,
  })
  message: String;

  @Field(() => TokenPair, {
    nullable: false,
  })
  tokens: TokenPair;
}
