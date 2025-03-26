import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRsvpsInput } from './user-create-without-rsvps.input';

@InputType()
export class UserCreateOrConnectWithoutRsvpsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

  @Field(() => UserCreateWithoutRsvpsInput, { nullable: false })
  @Type(() => UserCreateWithoutRsvpsInput)
  create!: UserCreateWithoutRsvpsInput;
}
