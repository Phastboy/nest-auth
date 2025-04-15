import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateWithoutRoomInput } from './event-occurrence-create-without-room.input';

@InputType()
export class EventOccurrenceCreateOrConnectWithoutRoomInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceCreateWithoutRoomInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutRoomInput)
  create!: EventOccurrenceCreateWithoutRoomInput;
}
