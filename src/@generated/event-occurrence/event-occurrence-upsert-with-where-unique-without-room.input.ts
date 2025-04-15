import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceUpdateWithoutRoomInput } from './event-occurrence-update-without-room.input';
import { EventOccurrenceCreateWithoutRoomInput } from './event-occurrence-create-without-room.input';

@InputType()
export class EventOccurrenceUpsertWithWhereUniqueWithoutRoomInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceUpdateWithoutRoomInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutRoomInput)
  update!: EventOccurrenceUpdateWithoutRoomInput;

  @Field(() => EventOccurrenceCreateWithoutRoomInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutRoomInput)
  create!: EventOccurrenceCreateWithoutRoomInput;
}
