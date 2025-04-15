import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPCreateWithoutEventOccurrenceInput } from './rsvp-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { RSVPCreateOrConnectWithoutEventOccurrenceInput } from './rsvp-create-or-connect-without-event-occurrence.input';
import { RSVPCreateManyEventOccurrenceInputEnvelope } from './rsvp-create-many-event-occurrence-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';

@InputType()
export class RSVPUncheckedCreateNestedManyWithoutEventOccurrenceInput {
  @Field(() => [RSVPCreateWithoutEventOccurrenceInput], { nullable: true })
  @Type(() => RSVPCreateWithoutEventOccurrenceInput)
  create?: Array<RSVPCreateWithoutEventOccurrenceInput>;

  @Field(() => [RSVPCreateOrConnectWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => RSVPCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: Array<RSVPCreateOrConnectWithoutEventOccurrenceInput>;

  @Field(() => RSVPCreateManyEventOccurrenceInputEnvelope, { nullable: true })
  @Type(() => RSVPCreateManyEventOccurrenceInputEnvelope)
  createMany?: RSVPCreateManyEventOccurrenceInputEnvelope;

  @Field(() => [RSVPWhereUniqueInput], { nullable: true })
  @Type(() => RSVPWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>
  >;
}
