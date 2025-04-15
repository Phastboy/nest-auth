import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateManyEventInput } from './event-occurrence-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class EventOccurrenceCreateManyEventInputEnvelope {
  @Field(() => [EventOccurrenceCreateManyEventInput], { nullable: false })
  @Type(() => EventOccurrenceCreateManyEventInput)
  data!: Array<EventOccurrenceCreateManyEventInput>;
}
