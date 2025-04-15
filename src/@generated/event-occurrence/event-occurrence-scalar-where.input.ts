import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumEventStatusFilter } from '../prisma/enum-event-status-filter.input';
import { EnumEventModeFilter } from '../prisma/enum-event-mode-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class EventOccurrenceScalarWhereInput {
  @Field(() => [EventOccurrenceScalarWhereInput], { nullable: true })
  AND?: Array<EventOccurrenceScalarWhereInput>;

  @Field(() => [EventOccurrenceScalarWhereInput], { nullable: true })
  OR?: Array<EventOccurrenceScalarWhereInput>;

  @Field(() => [EventOccurrenceScalarWhereInput], { nullable: true })
  NOT?: Array<EventOccurrenceScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  eventId?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  startTime?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  endTime?: DateTimeFilter;

  @Field(() => EnumEventStatusFilter, { nullable: true })
  eventStatus?: EnumEventStatusFilter;

  @Field(() => EnumEventModeFilter, { nullable: true })
  eventMode?: EnumEventModeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  eventLink?: StringNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  buildingId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  roomId?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
