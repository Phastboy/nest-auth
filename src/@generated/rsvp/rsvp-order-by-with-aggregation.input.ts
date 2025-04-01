import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RSVPCountOrderByAggregateInput } from './rsvp-count-order-by-aggregate.input';
import { RSVPAvgOrderByAggregateInput } from './rsvp-avg-order-by-aggregate.input';
import { RSVPMaxOrderByAggregateInput } from './rsvp-max-order-by-aggregate.input';
import { RSVPMinOrderByAggregateInput } from './rsvp-min-order-by-aggregate.input';
import { RSVPSumOrderByAggregateInput } from './rsvp-sum-order-by-aggregate.input';

@InputType()
export class RSVPOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  status?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => RSVPCountOrderByAggregateInput, { nullable: true })
  _count?: RSVPCountOrderByAggregateInput;

  @Field(() => RSVPAvgOrderByAggregateInput, { nullable: true })
  _avg?: RSVPAvgOrderByAggregateInput;

  @Field(() => RSVPMaxOrderByAggregateInput, { nullable: true })
  _max?: RSVPMaxOrderByAggregateInput;

  @Field(() => RSVPMinOrderByAggregateInput, { nullable: true })
  _min?: RSVPMinOrderByAggregateInput;

  @Field(() => RSVPSumOrderByAggregateInput, { nullable: true })
  _sum?: RSVPSumOrderByAggregateInput;
}
