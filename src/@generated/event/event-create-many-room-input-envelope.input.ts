import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyRoomInput } from './event-create-many-room.input';
import { Type } from 'class-transformer';

@InputType()
export class EventCreateManyRoomInputEnvelope {
  @Field(() => [EventCreateManyRoomInput], { nullable: false })
  @Type(() => EventCreateManyRoomInput)
  data!: Array<EventCreateManyRoomInput>;
}
