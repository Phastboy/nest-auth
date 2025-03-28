import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PostCountOrderByAggregateInput } from './post-count-order-by-aggregate.input';
import { PostAvgOrderByAggregateInput } from './post-avg-order-by-aggregate.input';
import { PostMaxOrderByAggregateInput } from './post-max-order-by-aggregate.input';
import { PostMinOrderByAggregateInput } from './post-min-order-by-aggregate.input';
import { PostSumOrderByAggregateInput } from './post-sum-order-by-aggregate.input';

@InputType()
export class PostOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  content?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  image?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  isEvent?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  eventId?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => PostCountOrderByAggregateInput, { nullable: true })
  _count?: PostCountOrderByAggregateInput;

  @Field(() => PostAvgOrderByAggregateInput, { nullable: true })
  _avg?: PostAvgOrderByAggregateInput;

  @Field(() => PostMaxOrderByAggregateInput, { nullable: true })
  _max?: PostMaxOrderByAggregateInput;

  @Field(() => PostMinOrderByAggregateInput, { nullable: true })
  _min?: PostMinOrderByAggregateInput;

  @Field(() => PostSumOrderByAggregateInput, { nullable: true })
  _sum?: PostSumOrderByAggregateInput;
}
