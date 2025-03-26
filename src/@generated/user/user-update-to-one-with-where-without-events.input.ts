import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutEventsInput } from './user-update-without-events.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutEventsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutEventsInput, { nullable: false })
  @Type(() => UserUpdateWithoutEventsInput)
  data!: UserUpdateWithoutEventsInput;
}
