import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserRoleScalarWhereInput {
  @Field(() => [UserRoleScalarWhereInput], { nullable: true })
  AND?: Array<UserRoleScalarWhereInput>;

  @Field(() => [UserRoleScalarWhereInput], { nullable: true })
  OR?: Array<UserRoleScalarWhereInput>;

  @Field(() => [UserRoleScalarWhereInput], { nullable: true })
  NOT?: Array<UserRoleScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  roleId?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
