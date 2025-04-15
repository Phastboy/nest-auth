import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';
import { BuildingOrderByWithRelationInput } from '../building/building-order-by-with-relation.input';
import { RoomOrderByWithRelationInput } from '../room/room-order-by-with-relation.input';
import { RSVPOrderByRelationAggregateInput } from '../rsvp/rsvp-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';

@InputType()
export class EventOccurrenceOrderByWithRelationInput {
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

  @Field(() => EventOrderByWithRelationInput, { nullable: true })
  event?: EventOrderByWithRelationInput;

  @Field(() => BuildingOrderByWithRelationInput, { nullable: true })
  building?: BuildingOrderByWithRelationInput;

  @Field(() => RoomOrderByWithRelationInput, { nullable: true })
  room?: RoomOrderByWithRelationInput;

  @Field(() => RSVPOrderByRelationAggregateInput, { nullable: true })
  rsvps?: RSVPOrderByRelationAggregateInput;

  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  comments?: CommentOrderByRelationAggregateInput;

  @Field(() => LikeOrderByRelationAggregateInput, { nullable: true })
  likes?: LikeOrderByRelationAggregateInput;
}
