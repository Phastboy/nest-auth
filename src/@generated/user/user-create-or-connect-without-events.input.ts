import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEventsInput } from './user-create-without-events.input';

@InputType()
export class UserCreateOrConnectWithoutEventsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

  @Field(() => UserCreateWithoutEventsInput, { nullable: false })
  @Type(() => UserCreateWithoutEventsInput)
  create!: UserCreateWithoutEventsInput;
}
