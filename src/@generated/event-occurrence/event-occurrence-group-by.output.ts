import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';
import { EventOccurrenceCountAggregate } from './event-occurrence-count-aggregate.output';
import { EventOccurrenceAvgAggregate } from './event-occurrence-avg-aggregate.output';
import { EventOccurrenceSumAggregate } from './event-occurrence-sum-aggregate.output';
import { EventOccurrenceMinAggregate } from './event-occurrence-min-aggregate.output';
import { EventOccurrenceMaxAggregate } from './event-occurrence-max-aggregate.output';

@ObjectType()
export class EventOccurrenceGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  eventId!: number;

  @Field(() => Date, { nullable: false })
  startTime!: Date | string;

  @Field(() => Date, { nullable: false })
  endTime!: Date | string;

  @Field(() => EventStatus, { nullable: false })
  eventStatus!: `${EventStatus}`;

  @Field(() => EventMode, { nullable: false })
  eventMode!: `${EventMode}`;

  @Field(() => String, { nullable: true })
  eventLink?: string;

  @Field(() => Int, { nullable: true })
  buildingId?: number;

  @Field(() => Int, { nullable: true })
  roomId?: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => EventOccurrenceCountAggregate, { nullable: true })
  _count?: EventOccurrenceCountAggregate;

  @Field(() => EventOccurrenceAvgAggregate, { nullable: true })
  _avg?: EventOccurrenceAvgAggregate;

  @Field(() => EventOccurrenceSumAggregate, { nullable: true })
  _sum?: EventOccurrenceSumAggregate;

  @Field(() => EventOccurrenceMinAggregate, { nullable: true })
  _min?: EventOccurrenceMinAggregate;

  @Field(() => EventOccurrenceMaxAggregate, { nullable: true })
  _max?: EventOccurrenceMaxAggregate;
}
