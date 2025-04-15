import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutOccurrencesInput } from './event-update-without-occurrences.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutOccurrencesInput {
  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  where?: EventWhereInput;

  @Field(() => EventUpdateWithoutOccurrencesInput, { nullable: false })
  @Type(() => EventUpdateWithoutOccurrencesInput)
  data!: EventUpdateWithoutOccurrencesInput;
}
