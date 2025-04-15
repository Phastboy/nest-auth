import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { Type } from 'class-transformer';
import { EventOccurrenceUpdateWithoutRsvpsInput } from './event-occurrence-update-without-rsvps.input';

@InputType()
export class EventOccurrenceUpdateToOneWithWhereWithoutRsvpsInput {
  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  where?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceUpdateWithoutRsvpsInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutRsvpsInput)
  data!: EventOccurrenceUpdateWithoutRsvpsInput;
}
