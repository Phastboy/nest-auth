import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildingCreateNestedOneWithoutRoomsInput } from '../building/building-create-nested-one-without-rooms.input';
import { EventOccurrenceCreateNestedManyWithoutRoomInput } from '../event-occurrence/event-occurrence-create-nested-many-without-room.input';

@InputType()
export class RoomCreateInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: true })
  capacity?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => BuildingCreateNestedOneWithoutRoomsInput, { nullable: false })
  building!: BuildingCreateNestedOneWithoutRoomsInput;

  @Field(() => EventOccurrenceCreateNestedManyWithoutRoomInput, {
    nullable: true,
  })
  EventOccurrence?: EventOccurrenceCreateNestedManyWithoutRoomInput;
}
