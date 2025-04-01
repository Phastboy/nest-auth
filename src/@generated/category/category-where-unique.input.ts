import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CategoryNullableScalarRelationFilter } from './category-nullable-scalar-relation-filter.input';
import { CategoryListRelationFilter } from './category-list-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';

@InputType()
export class CategoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    parentId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => CategoryNullableScalarRelationFilter, {nullable:true})
    parent?: CategoryNullableScalarRelationFilter;

    @Field(() => CategoryListRelationFilter, {nullable:true})
    children?: CategoryListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    events?: EventListRelationFilter;
}
