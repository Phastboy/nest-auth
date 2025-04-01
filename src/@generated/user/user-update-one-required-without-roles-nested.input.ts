import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRolesInput } from './user-create-or-connect-without-roles.input';
import { UserUpsertWithoutRolesInput } from './user-upsert-without-roles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRolesInput } from './user-update-to-one-with-where-without-roles.input';

@InputType()
export class UserUpdateOneRequiredWithoutRolesNestedInput {

    @Field(() => UserCreateWithoutRolesInput, {nullable:true})
    @Type(() => UserCreateWithoutRolesInput)
    create?: UserCreateWithoutRolesInput;

    @Field(() => UserCreateOrConnectWithoutRolesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRolesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput;

    @Field(() => UserUpsertWithoutRolesInput, {nullable:true})
    @Type(() => UserUpsertWithoutRolesInput)
    upsert?: UserUpsertWithoutRolesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRolesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRolesInput)
    update?: UserUpdateToOneWithWhereWithoutRolesInput;
}
