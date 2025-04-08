import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRolesInput } from '../user/user-create-nested-one-without-roles.input';

@InputType()
export class UserRoleCreateWithoutRoleInput {

    @Field(() => Int, {nullable:true})
    assignedBy?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRolesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRolesInput;
}
