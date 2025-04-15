import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventOccurrenceCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  eventId!: number;

  @Field(() => Int, { nullable: false })
  startTime!: number;

  @Field(() => Int, { nullable: false })
  endTime!: number;

  @Field(() => Int, { nullable: false })
  eventStatus!: number;

  @Field(() => Int, { nullable: false })
  eventMode!: number;

  @Field(() => Int, { nullable: false })
  eventLink!: number;

  @Field(() => Int, { nullable: false })
  buildingId!: number;

  @Field(() => Int, { nullable: false })
  roomId!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
