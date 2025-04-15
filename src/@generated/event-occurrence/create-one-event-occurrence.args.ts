import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOccurrenceCreateInput } from './event-occurrence-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventOccurrenceArgs {
  @Field(() => EventOccurrenceCreateInput, { nullable: false })
  @Type(() => EventOccurrenceCreateInput)
  data!: EventOccurrenceCreateInput;
}
