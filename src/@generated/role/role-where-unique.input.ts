import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRoleListRelationFilter } from '../user-role/user-role-list-relation-filter.input';

@InputType()
export class RoleWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [RoleWhereInput], { nullable: true })
  AND?: Array<RoleWhereInput>;

  @Field(() => [RoleWhereInput], { nullable: true })
  OR?: Array<RoleWhereInput>;

  @Field(() => [RoleWhereInput], { nullable: true })
  NOT?: Array<RoleWhereInput>;

  @Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => UserRoleListRelationFilter, { nullable: true })
  users?: UserRoleListRelationFilter;
}
