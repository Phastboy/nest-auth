import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LikeCountOrderByAggregateInput } from './like-count-order-by-aggregate.input';
import { LikeAvgOrderByAggregateInput } from './like-avg-order-by-aggregate.input';
import { LikeMaxOrderByAggregateInput } from './like-max-order-by-aggregate.input';
import { LikeMinOrderByAggregateInput } from './like-min-order-by-aggregate.input';
import { LikeSumOrderByAggregateInput } from './like-sum-order-by-aggregate.input';

@InputType()
export class LikeOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  postId?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  eventId?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => LikeCountOrderByAggregateInput, { nullable: true })
  _count?: LikeCountOrderByAggregateInput;

  @Field(() => LikeAvgOrderByAggregateInput, { nullable: true })
  _avg?: LikeAvgOrderByAggregateInput;

  @Field(() => LikeMaxOrderByAggregateInput, { nullable: true })
  _max?: LikeMaxOrderByAggregateInput;

  @Field(() => LikeMinOrderByAggregateInput, { nullable: true })
  _min?: LikeMinOrderByAggregateInput;

  @Field(() => LikeSumOrderByAggregateInput, { nullable: true })
  _sum?: LikeSumOrderByAggregateInput;
}
