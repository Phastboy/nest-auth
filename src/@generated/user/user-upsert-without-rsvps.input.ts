import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRsvpsInput } from './user-update-without-rsvps.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRsvpsInput } from './user-create-without-rsvps.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRsvpsInput {
  @Field(() => UserUpdateWithoutRsvpsInput, { nullable: false })
  @Type(() => UserUpdateWithoutRsvpsInput)
  update!: UserUpdateWithoutRsvpsInput;

  @Field(() => UserCreateWithoutRsvpsInput, { nullable: false })
  @Type(() => UserCreateWithoutRsvpsInput)
  create!: UserCreateWithoutRsvpsInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
