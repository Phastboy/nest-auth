import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CategoryNullableScalarRelationFilter } from './category-nullable-scalar-relation-filter.input';
import { CategoryListRelationFilter } from './category-list-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';

@InputType()
export class CategoryWhereInput {
  @Field(() => [CategoryWhereInput], { nullable: true })
  AND?: Array<CategoryWhereInput>;

  @Field(() => [CategoryWhereInput], { nullable: true })
  OR?: Array<CategoryWhereInput>;

  @Field(() => [CategoryWhereInput], { nullable: true })
  NOT?: Array<CategoryWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  slug?: StringFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  parentId?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => CategoryNullableScalarRelationFilter, { nullable: true })
  parent?: CategoryNullableScalarRelationFilter;

  @Field(() => CategoryListRelationFilter, { nullable: true })
  children?: CategoryListRelationFilter;

  @Field(() => PostListRelationFilter, { nullable: true })
  posts?: PostListRelationFilter;

  @Field(() => EventListRelationFilter, { nullable: true })
  events?: EventListRelationFilter;
}
