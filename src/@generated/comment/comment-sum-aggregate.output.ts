import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommentSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: true })
  postId?: number;

  @Field(() => Int, { nullable: true })
  eventId?: number;

  @Field(() => Int, { nullable: true })
  parentId?: number;
}
