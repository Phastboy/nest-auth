import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRoleCreateNestedManyWithoutRoleInput } from '../user-role/user-role-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  level?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => UserRoleCreateNestedManyWithoutRoleInput, { nullable: true })
  users?: UserRoleCreateNestedManyWithoutRoleInput;
}
