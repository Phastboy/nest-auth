import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRsvpsInput } from './user-create-without-rsvps.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRsvpsInput } from './user-create-or-connect-without-rsvps.input';
import { UserUpsertWithoutRsvpsInput } from './user-upsert-without-rsvps.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRsvpsInput } from './user-update-to-one-with-where-without-rsvps.input';

@InputType()
export class UserUpdateOneRequiredWithoutRsvpsNestedInput {
  @Field(() => UserCreateWithoutRsvpsInput, { nullable: true })
  @Type(() => UserCreateWithoutRsvpsInput)
  create?: UserCreateWithoutRsvpsInput;

  @Field(() => UserCreateOrConnectWithoutRsvpsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutRsvpsInput)
  connectOrCreate?: UserCreateOrConnectWithoutRsvpsInput;

  @Field(() => UserUpsertWithoutRsvpsInput, { nullable: true })
  @Type(() => UserUpsertWithoutRsvpsInput)
  upsert?: UserUpsertWithoutRsvpsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

  @Field(() => UserUpdateToOneWithWhereWithoutRsvpsInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutRsvpsInput)
  update?: UserUpdateToOneWithWhereWithoutRsvpsInput;
}
