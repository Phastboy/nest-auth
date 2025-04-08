import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  title!: number;

  @Field(() => Int, { nullable: false })
  description!: number;

  @Field(() => Int, { nullable: false })
  startTime!: number;

  @Field(() => Int, { nullable: false })
  endTime!: number;

  @Field(() => Int, { nullable: false })
  image!: number;

  @Field(() => Int, { nullable: false })
  isRecurring!: number;

  @Field(() => Int, { nullable: false })
  recurrenceRule!: number;

  @Field(() => Int, { nullable: false })
  isPublic!: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Int, { nullable: false })
  shareAsPost!: number;

  @Field(() => Int, { nullable: false })
  eventStatus!: number;

  @Field(() => Int, { nullable: false })
  eventMode!: number;

  @Field(() => Int, { nullable: false })
  eventType!: number;

  @Field(() => Int, { nullable: false })
  eventLink!: number;

  @Field(() => Int, { nullable: false })
  roomId!: number;

  @Field(() => Int, { nullable: false })
  buildingId!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
