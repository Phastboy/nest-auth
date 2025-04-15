import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPCreateManyEventOccurrenceInput } from './rsvp-create-many-event-occurrence.input';
import { Type } from 'class-transformer';

@InputType()
export class RSVPCreateManyEventOccurrenceInputEnvelope {
  @Field(() => [RSVPCreateManyEventOccurrenceInput], { nullable: false })
  @Type(() => RSVPCreateManyEventOccurrenceInput)
  data!: Array<RSVPCreateManyEventOccurrenceInput>;
}
