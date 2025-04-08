import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Event } from '../event/event.model';
import { User } from '../user/user.model';
import { Category } from '../category/category.model';
import { Comment } from '../comment/comment.model';
import { Like } from '../like/like.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isEvent!: boolean;

    @Field(() => Int, {nullable:true})
    eventId!: number | null;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Event, {nullable:true})
    event?: Event | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Category], {nullable:true})
    categories?: Array<Category>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
