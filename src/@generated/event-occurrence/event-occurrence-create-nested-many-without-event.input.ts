import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutEventInput } from './event-occurrence-create-without-event.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutEventInput } from './event-occurrence-create-or-connect-without-event.input';
import { EventOccurrenceCreateManyEventInputEnvelope } from './event-occurrence-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';

@InputType()
export class EventOccurrenceCreateNestedManyWithoutEventInput {
  @Field(() => [EventOccurrenceCreateWithoutEventInput], { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutEventInput)
  create?: Array<EventOccurrenceCreateWithoutEventInput>;

  @Field(() => [EventOccurrenceCreateOrConnectWithoutEventInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutEventInput)
  connectOrCreate?: Array<EventOccurrenceCreateOrConnectWithoutEventInput>;

  @Field(() => EventOccurrenceCreateManyEventInputEnvelope, { nullable: true })
  @Type(() => EventOccurrenceCreateManyEventInputEnvelope)
  createMany?: EventOccurrenceCreateManyEventInputEnvelope;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;
}
