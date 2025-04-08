import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RoomOrderByRelationAggregateInput } from '../room/room-order-by-relation-aggregate.input';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';

@InputType()
export class BuildingOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  name?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  number?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  road?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  landmark?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  area?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  longitude?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  latitude?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  capacity?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => RoomOrderByRelationAggregateInput, { nullable: true })
  rooms?: RoomOrderByRelationAggregateInput;

  @Field(() => EventOrderByRelationAggregateInput, { nullable: true })
  events?: EventOrderByRelationAggregateInput;
}
