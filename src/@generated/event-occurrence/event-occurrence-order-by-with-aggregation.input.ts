import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventOccurrenceCountOrderByAggregateInput } from './event-occurrence-count-order-by-aggregate.input';
import { EventOccurrenceAvgOrderByAggregateInput } from './event-occurrence-avg-order-by-aggregate.input';
import { EventOccurrenceMaxOrderByAggregateInput } from './event-occurrence-max-order-by-aggregate.input';
import { EventOccurrenceMinOrderByAggregateInput } from './event-occurrence-min-order-by-aggregate.input';
import { EventOccurrenceSumOrderByAggregateInput } from './event-occurrence-sum-order-by-aggregate.input';

@InputType()
export class EventOccurrenceOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  startTime?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  endTime?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventStatus?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventMode?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  eventLink?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  buildingId?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  roomId?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => EventOccurrenceCountOrderByAggregateInput, { nullable: true })
  _count?: EventOccurrenceCountOrderByAggregateInput;

  @Field(() => EventOccurrenceAvgOrderByAggregateInput, { nullable: true })
  _avg?: EventOccurrenceAvgOrderByAggregateInput;

  @Field(() => EventOccurrenceMaxOrderByAggregateInput, { nullable: true })
  _max?: EventOccurrenceMaxOrderByAggregateInput;

  @Field(() => EventOccurrenceMinOrderByAggregateInput, { nullable: true })
  _min?: EventOccurrenceMinOrderByAggregateInput;

  @Field(() => EventOccurrenceSumOrderByAggregateInput, { nullable: true })
  _sum?: EventOccurrenceSumOrderByAggregateInput;
}
