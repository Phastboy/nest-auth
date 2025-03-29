import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NotificationCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Int, { nullable: false })
  type!: number;

  @Field(() => Int, { nullable: false })
  content!: number;

  @Field(() => Int, { nullable: false })
  isRead!: number;

  @Field(() => Int, { nullable: false })
  referenceId!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
