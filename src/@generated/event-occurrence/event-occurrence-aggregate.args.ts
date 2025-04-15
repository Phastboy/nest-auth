import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { Type } from 'class-transformer';
import { EventOccurrenceOrderByWithRelationInput } from './event-occurrence-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventOccurrenceCountAggregateInput } from './event-occurrence-count-aggregate.input';
import { EventOccurrenceAvgAggregateInput } from './event-occurrence-avg-aggregate.input';
import { EventOccurrenceSumAggregateInput } from './event-occurrence-sum-aggregate.input';
import { EventOccurrenceMinAggregateInput } from './event-occurrence-min-aggregate.input';
import { EventOccurrenceMaxAggregateInput } from './event-occurrence-max-aggregate.input';

@ArgsType()
export class EventOccurrenceAggregateArgs {
  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  where?: EventOccurrenceWhereInput;

  @Field(() => [EventOccurrenceOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<EventOccurrenceOrderByWithRelationInput>;

  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => EventOccurrenceCountAggregateInput, { nullable: true })
  _count?: EventOccurrenceCountAggregateInput;

  @Field(() => EventOccurrenceAvgAggregateInput, { nullable: true })
  _avg?: EventOccurrenceAvgAggregateInput;

  @Field(() => EventOccurrenceSumAggregateInput, { nullable: true })
  _sum?: EventOccurrenceSumAggregateInput;

  @Field(() => EventOccurrenceMinAggregateInput, { nullable: true })
  _min?: EventOccurrenceMinAggregateInput;

  @Field(() => EventOccurrenceMaxAggregateInput, { nullable: true })
  _max?: EventOccurrenceMaxAggregateInput;
}
