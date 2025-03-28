import { Field, ObjectType } from '@nestjs/graphql';
import { TokenPair } from './token.type';

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
