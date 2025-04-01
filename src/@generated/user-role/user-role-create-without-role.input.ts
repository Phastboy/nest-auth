import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRolesInput } from '../user/user-create-nested-one-without-roles.input';

@InputType()
export class UserRoleCreateWithoutRoleInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRolesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRolesInput;
}
