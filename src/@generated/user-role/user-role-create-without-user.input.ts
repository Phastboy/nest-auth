import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';

@InputType()
export class UserRoleCreateWithoutUserInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => RoleCreateNestedOneWithoutUsersInput, { nullable: false })
  role!: RoleCreateNestedOneWithoutUsersInput;
}
