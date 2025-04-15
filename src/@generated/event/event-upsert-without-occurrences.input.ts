import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutOccurrencesInput } from './event-update-without-occurrences.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutOccurrencesInput } from './event-create-without-occurrences.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutOccurrencesInput {
  @Field(() => EventUpdateWithoutOccurrencesInput, { nullable: false })
  @Type(() => EventUpdateWithoutOccurrencesInput)
  update!: EventUpdateWithoutOccurrencesInput;

  @Field(() => EventCreateWithoutOccurrencesInput, { nullable: false })
  @Type(() => EventCreateWithoutOccurrencesInput)
  create!: EventCreateWithoutOccurrencesInput;

  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  where?: EventWhereInput;
}
