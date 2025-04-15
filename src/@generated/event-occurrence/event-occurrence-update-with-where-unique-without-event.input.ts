import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceUpdateWithoutEventInput } from './event-occurrence-update-without-event.input';

@InputType()
export class EventOccurrenceUpdateWithWhereUniqueWithoutEventInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceUpdateWithoutEventInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutEventInput)
  data!: EventOccurrenceUpdateWithoutEventInput;
}
