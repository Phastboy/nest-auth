import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EventOccurrenceCountOrderByAggregateInput {
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

  @Field(() => SortOrder, { nullable: true })
  eventLink?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  buildingId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  roomId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;
}
