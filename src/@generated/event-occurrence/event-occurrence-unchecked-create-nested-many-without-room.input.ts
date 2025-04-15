import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutRoomInput } from './event-occurrence-create-without-room.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutRoomInput } from './event-occurrence-create-or-connect-without-room.input';
import { EventOccurrenceCreateManyRoomInputEnvelope } from './event-occurrence-create-many-room-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';

@InputType()
export class EventOccurrenceUncheckedCreateNestedManyWithoutRoomInput {
  @Field(() => [EventOccurrenceCreateWithoutRoomInput], { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutRoomInput)
  create?: Array<EventOccurrenceCreateWithoutRoomInput>;

  @Field(() => [EventOccurrenceCreateOrConnectWithoutRoomInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutRoomInput)
  connectOrCreate?: Array<EventOccurrenceCreateOrConnectWithoutRoomInput>;

  @Field(() => EventOccurrenceCreateManyRoomInputEnvelope, { nullable: true })
  @Type(() => EventOccurrenceCreateManyRoomInputEnvelope)
  createMany?: EventOccurrenceCreateManyRoomInputEnvelope;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;
}
