import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { PostNullableScalarRelationFilter } from '../post/post-nullable-scalar-relation-filter.input';
import { EventNullableScalarRelationFilter } from '../event/event-nullable-scalar-relation-filter.input';
import { CommentNullableScalarRelationFilter } from './comment-nullable-scalar-relation-filter.input';
import { CommentListRelationFilter } from './comment-list-relation-filter.input';

@InputType()
export class CommentWhereInput {
  @Field(() => [CommentWhereInput], { nullable: true })
  AND?: Array<CommentWhereInput>;

  @Field(() => [CommentWhereInput], { nullable: true })
  OR?: Array<CommentWhereInput>;

  @Field(() => [CommentWhereInput], { nullable: true })
  NOT?: Array<CommentWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  postId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  eventId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  parentId?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  user?: UserScalarRelationFilter;

  @Field(() => PostNullableScalarRelationFilter, { nullable: true })
  post?: PostNullableScalarRelationFilter;

  @Field(() => EventNullableScalarRelationFilter, { nullable: true })
  event?: EventNullableScalarRelationFilter;

  @Field(() => CommentNullableScalarRelationFilter, { nullable: true })
  parent?: CommentNullableScalarRelationFilter;

  @Field(() => CommentListRelationFilter, { nullable: true })
  replies?: CommentListRelationFilter;
}
