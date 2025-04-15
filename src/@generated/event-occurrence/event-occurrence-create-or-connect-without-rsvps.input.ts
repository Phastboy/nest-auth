import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateWithoutRsvpsInput } from './event-occurrence-create-without-rsvps.input';

@InputType()
export class EventOccurrenceCreateOrConnectWithoutRsvpsInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceCreateWithoutRsvpsInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutRsvpsInput)
  create!: EventOccurrenceCreateWithoutRsvpsInput;
}
