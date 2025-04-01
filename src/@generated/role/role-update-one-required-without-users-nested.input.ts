import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUsersInput } from './role-create-without-users.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutUsersInput } from './role-create-or-connect-without-users.input';
import { RoleUpsertWithoutUsersInput } from './role-upsert-without-users.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateToOneWithWhereWithoutUsersInput } from './role-update-to-one-with-where-without-users.input';

@InputType()
export class RoleUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => RoleCreateWithoutUsersInput, {nullable:true})
    @Type(() => RoleCreateWithoutUsersInput)
    create?: RoleCreateWithoutUsersInput;

    @Field(() => RoleCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUsersInput)
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput;

    @Field(() => RoleUpsertWithoutUsersInput, {nullable:true})
    @Type(() => RoleUpsertWithoutUsersInput)
    upsert?: RoleUpsertWithoutUsersInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RoleUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => RoleUpdateToOneWithWhereWithoutUsersInput)
    update?: RoleUpdateToOneWithWhereWithoutUsersInput;
}
