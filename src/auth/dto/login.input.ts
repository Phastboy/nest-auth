import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginDto {
  @Field(() => String, {
    nullable: false,
  })
  email: string;

  @Field(() => String, {
    nullable: false,
  })
  password: string;
}
