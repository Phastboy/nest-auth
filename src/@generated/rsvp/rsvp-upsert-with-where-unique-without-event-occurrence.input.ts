import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';
import { Type } from 'class-transformer';
import { RSVPUpdateWithoutEventOccurrenceInput } from './rsvp-update-without-event-occurrence.input';
import { RSVPCreateWithoutEventOccurrenceInput } from './rsvp-create-without-event-occurrence.input';

@InputType()
export class RSVPUpsertWithWhereUniqueWithoutEventOccurrenceInput {
  @Field(() => RSVPWhereUniqueInput, { nullable: false })
  @Type(() => RSVPWhereUniqueInput)
  where!: Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>;

  @Field(() => RSVPUpdateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => RSVPUpdateWithoutEventOccurrenceInput)
  update!: RSVPUpdateWithoutEventOccurrenceInput;

  @Field(() => RSVPCreateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => RSVPCreateWithoutEventOccurrenceInput)
  create!: RSVPCreateWithoutEventOccurrenceInput;
}
