import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserRole } from '../user-role/user-role.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => [UserRole], { nullable: true })
  users?: Array<UserRole>;

  @Field(() => RoleCount, { nullable: false })
  _count?: RoleCount;
}
