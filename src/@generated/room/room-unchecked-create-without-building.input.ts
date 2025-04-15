import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventOccurrenceUncheckedCreateNestedManyWithoutRoomInput } from '../event-occurrence/event-occurrence-unchecked-create-nested-many-without-room.input';

@InputType()
export class RoomUncheckedCreateWithoutBuildingInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: true })
  capacity?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => EventOccurrenceUncheckedCreateNestedManyWithoutRoomInput, {
    nullable: true,
  })
  EventOccurrence?: EventOccurrenceUncheckedCreateNestedManyWithoutRoomInput;
}
