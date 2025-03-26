import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Post } from '../post/post.model';
import { Event } from '../event/event.model';
import { CommentCount } from './comment-count.output';

@ObjectType()
export class Comment {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Int, { nullable: true })
  postId!: number | null;

  @Field(() => Int, { nullable: true })
  eventId!: number | null;

  @Field(() => Int, { nullable: true })
  parentId!: number | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => Post, { nullable: true })
  post?: Post | null;

  @Field(() => Event, { nullable: true })
  event?: Event | null;

  @Field(() => Comment, { nullable: true })
  parent?: Comment | null;

  @Field(() => [Comment], { nullable: true })
  replies?: Array<Comment>;

  @Field(() => CommentCount, { nullable: false })
  _count?: CommentCount;
}
