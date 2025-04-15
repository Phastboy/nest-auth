import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomWhereInput } from './room-where.input';
import { Type } from 'class-transformer';
import { RoomUpdateWithoutEventOccurrenceInput } from './room-update-without-event-occurrence.input';

@InputType()
export class RoomUpdateToOneWithWhereWithoutEventOccurrenceInput {
  @Field(() => RoomWhereInput, { nullable: true })
  @Type(() => RoomWhereInput)
  where?: RoomWhereInput;

  @Field(() => RoomUpdateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => RoomUpdateWithoutEventOccurrenceInput)
  data!: RoomUpdateWithoutEventOccurrenceInput;
}
