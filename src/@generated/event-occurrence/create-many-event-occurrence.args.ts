import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOccurrenceCreateManyInput } from './event-occurrence-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventOccurrenceArgs {
  @Field(() => [EventOccurrenceCreateManyInput], { nullable: false })
  @Type(() => EventOccurrenceCreateManyInput)
  data!: Array<EventOccurrenceCreateManyInput>;
}
