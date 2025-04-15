import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventOccurrenceCreateNestedManyWithoutRoomInput } from '../event-occurrence/event-occurrence-create-nested-many-without-room.input';

@InputType()
export class RoomCreateWithoutBuildingInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: true })
  capacity?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => EventOccurrenceCreateNestedManyWithoutRoomInput, {
    nullable: true,
  })
  EventOccurrence?: EventOccurrenceCreateNestedManyWithoutRoomInput;
}
