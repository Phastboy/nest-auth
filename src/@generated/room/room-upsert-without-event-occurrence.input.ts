import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomUpdateWithoutEventOccurrenceInput } from './room-update-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { RoomCreateWithoutEventOccurrenceInput } from './room-create-without-event-occurrence.input';
import { RoomWhereInput } from './room-where.input';

@InputType()
export class RoomUpsertWithoutEventOccurrenceInput {
  @Field(() => RoomUpdateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => RoomUpdateWithoutEventOccurrenceInput)
  update!: RoomUpdateWithoutEventOccurrenceInput;

  @Field(() => RoomCreateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => RoomCreateWithoutEventOccurrenceInput)
  create!: RoomCreateWithoutEventOccurrenceInput;

  @Field(() => RoomWhereInput, { nullable: true })
  @Type(() => RoomWhereInput)
  where?: RoomWhereInput;
}
