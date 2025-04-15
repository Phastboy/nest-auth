import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumEventModeFilter } from '../prisma/enum-event-mode-filter.input';
import { EnumEventTypeFilter } from '../prisma/enum-event-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { PostNullableScalarRelationFilter } from '../post/post-nullable-scalar-relation-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { RSVPListRelationFilter } from '../rsvp/rsvp-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';
import { EventOccurrenceListRelationFilter } from '../event-occurrence/event-occurrence-list-relation-filter.input';

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

  @Field(() => StringNullableFilter, { nullable: true })
  image?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  isRecurring?: BoolFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  recurrenceRule?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  isPublic?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  active?: BoolFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => BoolFilter, { nullable: true })
  shareAsPost?: BoolFilter;

  @Field(() => EnumEventModeFilter, { nullable: true })
  eventMode?: EnumEventModeFilter;

  @Field(() => EnumEventTypeFilter, { nullable: true })
  eventType?: EnumEventTypeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  eventLink?: StringNullableFilter;

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

  @Field(() => CommentListRelationFilter, { nullable: true })
  comments?: CommentListRelationFilter;

  @Field(() => RSVPListRelationFilter, { nullable: true })
  rsvps?: RSVPListRelationFilter;

  @Field(() => LikeListRelationFilter, { nullable: true })
  likes?: LikeListRelationFilter;

  @Field(() => EventOccurrenceListRelationFilter, { nullable: true })
  occurrences?: EventOccurrenceListRelationFilter;
}
