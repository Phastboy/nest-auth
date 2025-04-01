import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Post } from '../post/post.model';
import { Event } from '../event/event.model';

@ObjectType()
export class Like {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    postId!: number | null;

    @Field(() => Int, {nullable:true})
    eventId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Post, {nullable:true})
    post?: Post | null;

    @Field(() => Event, {nullable:true})
    event?: Event | null;
}
