import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumEventStatusWithAggregatesFilter } from '../prisma/enum-event-status-with-aggregates-filter.input';
import { EnumEventModeWithAggregatesFilter } from '../prisma/enum-event-mode-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class EventOccurrenceScalarWhereWithAggregatesInput {
  @Field(() => [EventOccurrenceScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<EventOccurrenceScalarWhereWithAggregatesInput>;

  @Field(() => [EventOccurrenceScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<EventOccurrenceScalarWhereWithAggregatesInput>;

  @Field(() => [EventOccurrenceScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<EventOccurrenceScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  eventId?: IntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  startTime?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  endTime?: DateTimeWithAggregatesFilter;

  @Field(() => EnumEventStatusWithAggregatesFilter, { nullable: true })
  eventStatus?: EnumEventStatusWithAggregatesFilter;

  @Field(() => EnumEventModeWithAggregatesFilter, { nullable: true })
  eventMode?: EnumEventModeWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  eventLink?: StringNullableWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  buildingId?: IntNullableWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  roomId?: IntNullableWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
