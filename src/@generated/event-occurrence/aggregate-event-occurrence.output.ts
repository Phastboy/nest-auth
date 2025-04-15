import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventOccurrenceCountAggregate } from './event-occurrence-count-aggregate.output';
import { EventOccurrenceAvgAggregate } from './event-occurrence-avg-aggregate.output';
import { EventOccurrenceSumAggregate } from './event-occurrence-sum-aggregate.output';
import { EventOccurrenceMinAggregate } from './event-occurrence-min-aggregate.output';
import { EventOccurrenceMaxAggregate } from './event-occurrence-max-aggregate.output';

@ObjectType()
export class AggregateEventOccurrence {
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
