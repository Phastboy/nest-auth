import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { PostScalarRelationFilter } from '../post/post-scalar-relation-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { RSVPListRelationFilter } from '../rsvp/rsvp-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';

@InputType()
export class EventWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  postId?: number;

  @Field(() => [EventWhereInput], { nullable: true })
  AND?: Array<EventWhereInput>;

  @Field(() => [EventWhereInput], { nullable: true })
  OR?: Array<EventWhereInput>;

  @Field(() => [EventWhereInput], { nullable: true })
  NOT?: Array<EventWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  location?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  startTime?: DateTimeFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  endTime?: DateTimeNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  image?: StringNullableFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  user?: UserScalarRelationFilter;

  @Field(() => PostScalarRelationFilter, { nullable: true })
  post?: PostScalarRelationFilter;

  @Field(() => CategoryListRelationFilter, { nullable: true })
  categories?: CategoryListRelationFilter;

  @Field(() => CommentListRelationFilter, { nullable: true })
  comments?: CommentListRelationFilter;

  @Field(() => RSVPListRelationFilter, { nullable: true })
  rsvps?: RSVPListRelationFilter;

  @Field(() => LikeListRelationFilter, { nullable: true })
  likes?: LikeListRelationFilter;
}
