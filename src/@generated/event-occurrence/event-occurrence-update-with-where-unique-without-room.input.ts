import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceUpdateWithoutRoomInput } from './event-occurrence-update-without-room.input';

@InputType()
export class EventOccurrenceUpdateWithWhereUniqueWithoutRoomInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceUpdateWithoutRoomInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutRoomInput)
  data!: EventOccurrenceUpdateWithoutRoomInput;
}
