import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';
import { EventOccurrenceOrderByWithRelationInput } from '../event-occurrence/event-occurrence-order-by-with-relation.input';

@InputType()
export class RSVPOrderByWithRelationInput {
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

  @Field(() => SortOrderInput, { nullable: true })
  eventOccurrenceId?: SortOrderInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;

  @Field(() => EventOrderByWithRelationInput, { nullable: true })
  event?: EventOrderByWithRelationInput;

  @Field(() => EventOccurrenceOrderByWithRelationInput, { nullable: true })
  EventOccurrence?: EventOccurrenceOrderByWithRelationInput;
}
