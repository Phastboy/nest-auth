import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { NotificationCountOrderByAggregateInput } from './notification-count-order-by-aggregate.input';
import { NotificationAvgOrderByAggregateInput } from './notification-avg-order-by-aggregate.input';
import { NotificationMaxOrderByAggregateInput } from './notification-max-order-by-aggregate.input';
import { NotificationMinOrderByAggregateInput } from './notification-min-order-by-aggregate.input';
import { NotificationSumOrderByAggregateInput } from './notification-sum-order-by-aggregate.input';

@InputType()
export class NotificationOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  type?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  content?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  isRead?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  referenceId?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => NotificationCountOrderByAggregateInput, { nullable: true })
  _count?: NotificationCountOrderByAggregateInput;

  @Field(() => NotificationAvgOrderByAggregateInput, { nullable: true })
  _avg?: NotificationAvgOrderByAggregateInput;

  @Field(() => NotificationMaxOrderByAggregateInput, { nullable: true })
  _max?: NotificationMaxOrderByAggregateInput;

  @Field(() => NotificationMinOrderByAggregateInput, { nullable: true })
  _min?: NotificationMinOrderByAggregateInput;

  @Field(() => NotificationSumOrderByAggregateInput, { nullable: true })
  _sum?: NotificationSumOrderByAggregateInput;
}
