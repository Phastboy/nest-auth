import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceUpdateWithoutRsvpsInput } from './event-occurrence-update-without-rsvps.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateWithoutRsvpsInput } from './event-occurrence-create-without-rsvps.input';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';

@InputType()
export class EventOccurrenceUpsertWithoutRsvpsInput {
  @Field(() => EventOccurrenceUpdateWithoutRsvpsInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutRsvpsInput)
  update!: EventOccurrenceUpdateWithoutRsvpsInput;

  @Field(() => EventOccurrenceCreateWithoutRsvpsInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutRsvpsInput)
  create!: EventOccurrenceCreateWithoutRsvpsInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  where?: EventOccurrenceWhereInput;
}
