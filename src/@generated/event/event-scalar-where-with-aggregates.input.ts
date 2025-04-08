import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumEventStatusWithAggregatesFilter } from '../prisma/enum-event-status-with-aggregates-filter.input';
import { EnumEventModeWithAggregatesFilter } from '../prisma/enum-event-mode-with-aggregates-filter.input';
import { EnumEventTypeWithAggregatesFilter } from '../prisma/enum-event-type-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EventScalarWhereWithAggregatesInput {

    @Field(() => [EventScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EventScalarWhereWithAggregatesInput>;

    @Field(() => [EventScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EventScalarWhereWithAggregatesInput>;

    @Field(() => [EventScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EventScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startTime?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endTime?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    image?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isRecurring?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    recurrenceRule?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPublic?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    shareAsPost?: BoolWithAggregatesFilter;

    @Field(() => EnumEventStatusWithAggregatesFilter, {nullable:true})
    eventStatus?: EnumEventStatusWithAggregatesFilter;

    @Field(() => EnumEventModeWithAggregatesFilter, {nullable:true})
    eventMode?: EnumEventModeWithAggregatesFilter;

    @Field(() => EnumEventTypeWithAggregatesFilter, {nullable:true})
    eventType?: EnumEventTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    eventLink?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    roomId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    buildingId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
