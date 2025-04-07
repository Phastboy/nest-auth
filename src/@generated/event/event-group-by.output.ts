import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';
import { EventType } from '../prisma/event-type.enum';
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

  @Field(() => Date, { nullable: true })
  startTime?: Date | string;

  @Field(() => Date, { nullable: true })
  endTime?: Date | string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Boolean, { nullable: false })
  isRecurring!: boolean;

  @Field(() => String, { nullable: true })
  recurrenceRule?: string;

  @Field(() => Boolean, { nullable: false })
  isPublic!: boolean;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Boolean, { nullable: false })
  shareAsPost!: boolean;

  @Field(() => EventStatus, { nullable: false })
  status!: `${EventStatus}`;

  @Field(() => EventMode, { nullable: false })
  eventMode!: `${EventMode}`;

  @Field(() => EventType, { nullable: false })
  eventType!: `${EventType}`;

  @Field(() => String, { nullable: true })
  eventLink?: string;

  @Field(() => Int, { nullable: true })
  roomId?: number;

  @Field(() => Int, { nullable: true })
  buildingId?: number;

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
