import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutBuildingInput } from './event-create-without-building.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutBuildingInput } from './event-create-or-connect-without-building.input';
import { EventUpsertWithWhereUniqueWithoutBuildingInput } from './event-upsert-with-where-unique-without-building.input';
import { EventCreateManyBuildingInputEnvelope } from './event-create-many-building-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutBuildingInput } from './event-update-with-where-unique-without-building.input';
import { EventUpdateManyWithWhereWithoutBuildingInput } from './event-update-many-with-where-without-building.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUpdateManyWithoutBuildingNestedInput {
  @Field(() => [EventCreateWithoutBuildingInput], { nullable: true })
  @Type(() => EventCreateWithoutBuildingInput)
  create?: Array<EventCreateWithoutBuildingInput>;

  @Field(() => [EventCreateOrConnectWithoutBuildingInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutBuildingInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutBuildingInput>;

  @Field(() => [EventUpsertWithWhereUniqueWithoutBuildingInput], {
    nullable: true,
  })
  @Type(() => EventUpsertWithWhereUniqueWithoutBuildingInput)
  upsert?: Array<EventUpsertWithWhereUniqueWithoutBuildingInput>;

  @Field(() => EventCreateManyBuildingInputEnvelope, { nullable: true })
  @Type(() => EventCreateManyBuildingInputEnvelope)
  createMany?: EventCreateManyBuildingInputEnvelope;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

  @Field(() => [EventUpdateWithWhereUniqueWithoutBuildingInput], {
    nullable: true,
  })
  @Type(() => EventUpdateWithWhereUniqueWithoutBuildingInput)
  update?: Array<EventUpdateWithWhereUniqueWithoutBuildingInput>;

  @Field(() => [EventUpdateManyWithWhereWithoutBuildingInput], {
    nullable: true,
  })
  @Type(() => EventUpdateManyWithWhereWithoutBuildingInput)
  updateMany?: Array<EventUpdateManyWithWhereWithoutBuildingInput>;

  @Field(() => [EventScalarWhereInput], { nullable: true })
  @Type(() => EventScalarWhereInput)
  deleteMany?: Array<EventScalarWhereInput>;
}
