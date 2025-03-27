import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Event } from '../event/event.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:true})
    parentId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Category, {nullable:true})
    parent?: Category | null;

    @Field(() => [Category], {nullable:true})
    children?: Array<Category>;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Event], {nullable:true})
    events?: Array<Event>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
