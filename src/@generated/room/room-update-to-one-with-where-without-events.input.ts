import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomWhereInput } from './room-where.input';
import { Type } from 'class-transformer';
import { RoomUpdateWithoutEventsInput } from './room-update-without-events.input';

@InputType()
export class RoomUpdateToOneWithWhereWithoutEventsInput {
  @Field(() => RoomWhereInput, { nullable: true })
  @Type(() => RoomWhereInput)
  where?: RoomWhereInput;

  @Field(() => RoomUpdateWithoutEventsInput, { nullable: false })
  @Type(() => RoomUpdateWithoutEventsInput)
  data!: RoomUpdateWithoutEventsInput;
}
