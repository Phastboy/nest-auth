import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumEventStatusFilter } from '../prisma/enum-event-status-filter.input';
import { EnumEventModeFilter } from '../prisma/enum-event-mode-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EventScalarRelationFilter } from '../event/event-scalar-relation-filter.input';
import { BuildingNullableScalarRelationFilter } from '../building/building-nullable-scalar-relation-filter.input';
import { RoomNullableScalarRelationFilter } from '../room/room-nullable-scalar-relation-filter.input';
import { RSVPListRelationFilter } from '../rsvp/rsvp-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';

@InputType()
export class EventOccurrenceWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => [EventOccurrenceWhereInput], { nullable: true })
  AND?: Array<EventOccurrenceWhereInput>;

  @Field(() => [EventOccurrenceWhereInput], { nullable: true })
  OR?: Array<EventOccurrenceWhereInput>;

  @Field(() => [EventOccurrenceWhereInput], { nullable: true })
  NOT?: Array<EventOccurrenceWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  eventId?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  startTime?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  endTime?: DateTimeFilter;

  @Field(() => EnumEventStatusFilter, { nullable: true })
  eventStatus?: EnumEventStatusFilter;

  @Field(() => EnumEventModeFilter, { nullable: true })
  eventMode?: EnumEventModeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  eventLink?: StringNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  buildingId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  roomId?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => EventScalarRelationFilter, { nullable: true })
  event?: EventScalarRelationFilter;

  @Field(() => BuildingNullableScalarRelationFilter, { nullable: true })
  building?: BuildingNullableScalarRelationFilter;

  @Field(() => RoomNullableScalarRelationFilter, { nullable: true })
  room?: RoomNullableScalarRelationFilter;

  @Field(() => RSVPListRelationFilter, { nullable: true })
  rsvps?: RSVPListRelationFilter;

  @Field(() => CommentListRelationFilter, { nullable: true })
  comments?: CommentListRelationFilter;

  @Field(() => LikeListRelationFilter, { nullable: true })
  likes?: LikeListRelationFilter;
}
