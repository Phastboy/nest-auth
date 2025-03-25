import { Field, ObjectType } from '@nestjs/graphql';
import { Tokens } from './token.type';

@ObjectType()
export class LoginResponse {
  @Field(() => String)
  message: String;

  @Field(() => Tokens, {
    nullable: false,
  })
  tokens: Tokens;
}
