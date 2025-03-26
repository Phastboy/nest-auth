import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';
import { EventNullableScalarRelationFilter } from '../event/event-nullable-scalar-relation-filter.input';

@InputType()
export class PostWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => [PostWhereInput], { nullable: true })
  AND?: Array<PostWhereInput>;

  @Field(() => [PostWhereInput], { nullable: true })
  OR?: Array<PostWhereInput>;

  @Field(() => [PostWhereInput], { nullable: true })
  NOT?: Array<PostWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  image?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  isEvent?: BoolFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  user?: UserScalarRelationFilter;

  @Field(() => CategoryListRelationFilter, { nullable: true })
  categories?: CategoryListRelationFilter;

  @Field(() => CommentListRelationFilter, { nullable: true })
  comments?: CommentListRelationFilter;

  @Field(() => LikeListRelationFilter, { nullable: true })
  likes?: LikeListRelationFilter;

  @Field(() => EventNullableScalarRelationFilter, { nullable: true })
  event?: EventNullableScalarRelationFilter;
}
