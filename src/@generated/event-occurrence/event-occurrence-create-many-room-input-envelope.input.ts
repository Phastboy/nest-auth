import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateManyRoomInput } from './event-occurrence-create-many-room.input';
import { Type } from 'class-transformer';

@InputType()
export class EventOccurrenceCreateManyRoomInputEnvelope {
  @Field(() => [EventOccurrenceCreateManyRoomInput], { nullable: false })
  @Type(() => EventOccurrenceCreateManyRoomInput)
  data!: Array<EventOccurrenceCreateManyRoomInput>;
}
