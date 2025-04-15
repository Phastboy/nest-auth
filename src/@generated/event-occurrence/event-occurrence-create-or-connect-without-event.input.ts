import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateWithoutEventInput } from './event-occurrence-create-without-event.input';

@InputType()
export class EventOccurrenceCreateOrConnectWithoutEventInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceCreateWithoutEventInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutEventInput)
  create!: EventOccurrenceCreateWithoutEventInput;
}
