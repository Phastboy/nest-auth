import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRolesInput } from './user-create-or-connect-without-roles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRolesInput {
  @Field(() => UserCreateWithoutRolesInput, { nullable: true })
  @Type(() => UserCreateWithoutRolesInput)
  create?: UserCreateWithoutRolesInput;

  @Field(() => UserCreateOrConnectWithoutRolesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutRolesInput)
  connectOrCreate?: UserCreateOrConnectWithoutRolesInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
