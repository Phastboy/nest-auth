import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PostOrderByWithRelationInput } from '../post/post-order-by-with-relation.input';
import { CategoryOrderByRelationAggregateInput } from '../category/category-order-by-relation-aggregate.input';
import { RoomOrderByWithRelationInput } from '../room/room-order-by-with-relation.input';
import { BuildingOrderByWithRelationInput } from '../building/building-order-by-with-relation.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { RSVPOrderByRelationAggregateInput } from '../rsvp/rsvp-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';

@InputType()
export class EventOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  title?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  description?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  location?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  startTime?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  endTime?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  image?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  isRecurring?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  recurrenceRule?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  isPublic?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  shareAsPost?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  status?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventMode?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventType?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  eventLink?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  roomId?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  buildingId?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;

  @Field(() => PostOrderByWithRelationInput, { nullable: true })
  post?: PostOrderByWithRelationInput;

  @Field(() => CategoryOrderByRelationAggregateInput, { nullable: true })
  categories?: CategoryOrderByRelationAggregateInput;

  @Field(() => RoomOrderByWithRelationInput, { nullable: true })
  room?: RoomOrderByWithRelationInput;

  @Field(() => BuildingOrderByWithRelationInput, { nullable: true })
  building?: BuildingOrderByWithRelationInput;

  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  comments?: CommentOrderByRelationAggregateInput;

  @Field(() => RSVPOrderByRelationAggregateInput, { nullable: true })
  rsvps?: RSVPOrderByRelationAggregateInput;

  @Field(() => LikeOrderByRelationAggregateInput, { nullable: true })
  likes?: LikeOrderByRelationAggregateInput;
}
