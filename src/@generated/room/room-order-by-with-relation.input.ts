import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BuildingOrderByWithRelationInput } from '../building/building-order-by-with-relation.input';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';

@InputType()
export class RoomOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  name?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  buildingId?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  capacity?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => BuildingOrderByWithRelationInput, { nullable: true })
  building?: BuildingOrderByWithRelationInput;

  @Field(() => EventOrderByRelationAggregateInput, { nullable: true })
  events?: EventOrderByRelationAggregateInput;
}
