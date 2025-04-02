import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Role } from '../role/role.model';

@ObjectType()
export class UserRole {
  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Int, { nullable: false })
  roleId!: number;

  @Field(() => Int, { nullable: true })
  assignedBy!: number | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => Role, { nullable: false })
  role?: Role;
}
