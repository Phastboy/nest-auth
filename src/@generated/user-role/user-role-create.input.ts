import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRolesInput } from '../user/user-create-nested-one-without-roles.input';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';

@InputType()
export class UserRoleCreateInput {

    @Field(() => Int, {nullable:true})
    assignedBy?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRolesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRolesInput;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;
}
