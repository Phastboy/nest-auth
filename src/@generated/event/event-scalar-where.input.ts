import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumEventStatusFilter } from '../prisma/enum-event-status-filter.input';
import { EnumEventModeFilter } from '../prisma/enum-event-mode-filter.input';
import { EnumEventTypeFilter } from '../prisma/enum-event-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EventScalarWhereInput {

    @Field(() => [EventScalarWhereInput], {nullable:true})
    AND?: Array<EventScalarWhereInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    OR?: Array<EventScalarWhereInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    NOT?: Array<EventScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startTime?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endTime?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRecurring?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    recurrenceRule?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPublic?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    shareAsPost?: BoolFilter;

    @Field(() => EnumEventStatusFilter, {nullable:true})
    eventStatus?: EnumEventStatusFilter;

    @Field(() => EnumEventModeFilter, {nullable:true})
    eventMode?: EnumEventModeFilter;

    @Field(() => EnumEventTypeFilter, {nullable:true})
    eventType?: EnumEventTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    eventLink?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    roomId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    buildingId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
