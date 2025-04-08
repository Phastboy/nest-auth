import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumEventStatusFilter } from '../prisma/enum-event-status-filter.input';
import { EnumEventModeFilter } from '../prisma/enum-event-mode-filter.input';
import { EnumEventTypeFilter } from '../prisma/enum-event-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { PostNullableScalarRelationFilter } from '../post/post-nullable-scalar-relation-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { RoomNullableScalarRelationFilter } from '../room/room-nullable-scalar-relation-filter.input';
import { BuildingNullableScalarRelationFilter } from '../building/building-nullable-scalar-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { RSVPListRelationFilter } from '../rsvp/rsvp-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';

@InputType()
export class EventWhereInput {
  @Field(() => [EventWhereInput], { nullable: true })
  AND?: Array<EventWhereInput>;

  @Field(() => [EventWhereInput], { nullable: true })
  OR?: Array<EventWhereInput>;

  @Field(() => [EventWhereInput], { nullable: true })
  NOT?: Array<EventWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  startTime?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  endTime?: DateTimeNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  image?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  isRecurring?: BoolFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  recurrenceRule?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  isPublic?: BoolFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => BoolFilter, { nullable: true })
  shareAsPost?: BoolFilter;

  @Field(() => EnumEventStatusFilter, { nullable: true })
  eventStatus?: EnumEventStatusFilter;

  @Field(() => EnumEventModeFilter, { nullable: true })
  eventMode?: EnumEventModeFilter;

  @Field(() => EnumEventTypeFilter, { nullable: true })
  eventType?: EnumEventTypeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  eventLink?: StringNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  roomId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  buildingId?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  user?: UserScalarRelationFilter;

  @Field(() => PostNullableScalarRelationFilter, { nullable: true })
  post?: PostNullableScalarRelationFilter;

  @Field(() => CategoryListRelationFilter, { nullable: true })
  categories?: CategoryListRelationFilter;

  @Field(() => RoomNullableScalarRelationFilter, { nullable: true })
  room?: RoomNullableScalarRelationFilter;

  @Field(() => BuildingNullableScalarRelationFilter, { nullable: true })
  building?: BuildingNullableScalarRelationFilter;

  @Field(() => CommentListRelationFilter, { nullable: true })
  comments?: CommentListRelationFilter;

  @Field(() => RSVPListRelationFilter, { nullable: true })
  rsvps?: RSVPListRelationFilter;

  @Field(() => LikeListRelationFilter, { nullable: true })
  likes?: LikeListRelationFilter;
}
