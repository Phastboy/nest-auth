import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Event } from '../event/event.model';
import { Comment } from '../comment/comment.model';
import { Notification } from '../notification/notification.model';
import { Like } from '../like/like.model';
import { RSVP } from '../rsvp/rsvp.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {defaultValue:'/default-avatar.png',nullable:true})
    avatar!: string | null;

    @Field(() => String, {defaultValue:'student',nullable:true})
    role!: string | null;

    @Field(() => String, {nullable:true})
    bio!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Event], {nullable:true})
    events?: Array<Event>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => [RSVP], {nullable:true})
    rsvps?: Array<RSVP>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
