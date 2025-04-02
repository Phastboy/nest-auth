import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserRoleCreateManyUserInput {
  @Field(() => Int, { nullable: false })
  roleId!: number;

  @Field(() => Int, { nullable: true })
  assignedBy?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
}
