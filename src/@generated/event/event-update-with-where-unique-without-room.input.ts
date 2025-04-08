import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutRoomInput } from './event-update-without-room.input';

@InputType()
export class EventUpdateWithWhereUniqueWithoutRoomInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

  @Field(() => EventUpdateWithoutRoomInput, { nullable: false })
  @Type(() => EventUpdateWithoutRoomInput)
  data!: EventUpdateWithoutRoomInput;
}
