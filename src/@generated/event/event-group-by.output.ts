import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventCountAggregate } from './event-count-aggregate.output';
import { EventAvgAggregate } from './event-avg-aggregate.output';
import { EventSumAggregate } from './event-sum-aggregate.output';
import { EventMinAggregate } from './event-min-aggregate.output';
import { EventMaxAggregate } from './event-max-aggregate.output';

@ObjectType()
export class EventGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  location!: string;

  @Field(() => Date, { nullable: false })
  startTime!: Date | string;

  @Field(() => Date, { nullable: true })
  endTime?: Date | string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Int, { nullable: false })
  postId!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => EventCountAggregate, { nullable: true })
  _count?: EventCountAggregate;

  @Field(() => EventAvgAggregate, { nullable: true })
  _avg?: EventAvgAggregate;

  @Field(() => EventSumAggregate, { nullable: true })
  _sum?: EventSumAggregate;

  @Field(() => EventMinAggregate, { nullable: true })
  _min?: EventMinAggregate;

  @Field(() => EventMaxAggregate, { nullable: true })
  _max?: EventMaxAggregate;
}
