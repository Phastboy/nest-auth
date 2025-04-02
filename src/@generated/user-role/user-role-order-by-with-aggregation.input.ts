import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserRoleCountOrderByAggregateInput } from './user-role-count-order-by-aggregate.input';
import { UserRoleAvgOrderByAggregateInput } from './user-role-avg-order-by-aggregate.input';
import { UserRoleMaxOrderByAggregateInput } from './user-role-max-order-by-aggregate.input';
import { UserRoleMinOrderByAggregateInput } from './user-role-min-order-by-aggregate.input';
import { UserRoleSumOrderByAggregateInput } from './user-role-sum-order-by-aggregate.input';

@InputType()
export class UserRoleOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  roleId?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  assignedBy?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => UserRoleCountOrderByAggregateInput, { nullable: true })
  _count?: UserRoleCountOrderByAggregateInput;

  @Field(() => UserRoleAvgOrderByAggregateInput, { nullable: true })
  _avg?: UserRoleAvgOrderByAggregateInput;

  @Field(() => UserRoleMaxOrderByAggregateInput, { nullable: true })
  _max?: UserRoleMaxOrderByAggregateInput;

  @Field(() => UserRoleMinOrderByAggregateInput, { nullable: true })
  _min?: UserRoleMinOrderByAggregateInput;

  @Field(() => UserRoleSumOrderByAggregateInput, { nullable: true })
  _sum?: UserRoleSumOrderByAggregateInput;
}
