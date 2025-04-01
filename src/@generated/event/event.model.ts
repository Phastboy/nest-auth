import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Post } from '../post/post.model';
import { Category } from '../category/category.model';
import { Comment } from '../comment/comment.model';
import { RSVP } from '../rsvp/rsvp.model';
import { Like } from '../like/like.model';
import { EventCount } from './event-count.output';

@ObjectType()
export class Event {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => Date, {nullable:false})
    startTime!: Date;

    @Field(() => Date, {nullable:true})
    endTime!: Date | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    shareAsPost!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Post, {nullable:true})
    post?: Post | null;

    @Field(() => [Category], {nullable:true})
    categories?: Array<Category>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [RSVP], {nullable:true})
    rsvps?: Array<RSVP>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => EventCount, {nullable:false})
    _count?: EventCount;
}
