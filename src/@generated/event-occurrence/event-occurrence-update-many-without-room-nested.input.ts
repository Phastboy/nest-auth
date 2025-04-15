import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutRoomInput } from './event-occurrence-create-without-room.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutRoomInput } from './event-occurrence-create-or-connect-without-room.input';
import { EventOccurrenceUpsertWithWhereUniqueWithoutRoomInput } from './event-occurrence-upsert-with-where-unique-without-room.input';
import { EventOccurrenceCreateManyRoomInputEnvelope } from './event-occurrence-create-many-room-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { EventOccurrenceUpdateWithWhereUniqueWithoutRoomInput } from './event-occurrence-update-with-where-unique-without-room.input';
import { EventOccurrenceUpdateManyWithWhereWithoutRoomInput } from './event-occurrence-update-many-with-where-without-room.input';
import { EventOccurrenceScalarWhereInput } from './event-occurrence-scalar-where.input';

@InputType()
export class EventOccurrenceUpdateManyWithoutRoomNestedInput {
  @Field(() => [EventOccurrenceCreateWithoutRoomInput], { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutRoomInput)
  create?: Array<EventOccurrenceCreateWithoutRoomInput>;

  @Field(() => [EventOccurrenceCreateOrConnectWithoutRoomInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutRoomInput)
  connectOrCreate?: Array<EventOccurrenceCreateOrConnectWithoutRoomInput>;

  @Field(() => [EventOccurrenceUpsertWithWhereUniqueWithoutRoomInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpsertWithWhereUniqueWithoutRoomInput)
  upsert?: Array<EventOccurrenceUpsertWithWhereUniqueWithoutRoomInput>;

  @Field(() => EventOccurrenceCreateManyRoomInputEnvelope, { nullable: true })
  @Type(() => EventOccurrenceCreateManyRoomInputEnvelope)
  createMany?: EventOccurrenceCreateManyRoomInputEnvelope;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  set?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;

  @Field(() => [EventOccurrenceUpdateWithWhereUniqueWithoutRoomInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpdateWithWhereUniqueWithoutRoomInput)
  update?: Array<EventOccurrenceUpdateWithWhereUniqueWithoutRoomInput>;

  @Field(() => [EventOccurrenceUpdateManyWithWhereWithoutRoomInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpdateManyWithWhereWithoutRoomInput)
  updateMany?: Array<EventOccurrenceUpdateManyWithWhereWithoutRoomInput>;

  @Field(() => [EventOccurrenceScalarWhereInput], { nullable: true })
  @Type(() => EventOccurrenceScalarWhereInput)
  deleteMany?: Array<EventOccurrenceScalarWhereInput>;
}
