import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutBuildingInput } from './event-occurrence-create-without-building.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutBuildingInput } from './event-occurrence-create-or-connect-without-building.input';
import { EventOccurrenceUpsertWithWhereUniqueWithoutBuildingInput } from './event-occurrence-upsert-with-where-unique-without-building.input';
import { EventOccurrenceCreateManyBuildingInputEnvelope } from './event-occurrence-create-many-building-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { EventOccurrenceUpdateWithWhereUniqueWithoutBuildingInput } from './event-occurrence-update-with-where-unique-without-building.input';
import { EventOccurrenceUpdateManyWithWhereWithoutBuildingInput } from './event-occurrence-update-many-with-where-without-building.input';
import { EventOccurrenceScalarWhereInput } from './event-occurrence-scalar-where.input';

@InputType()
export class EventOccurrenceUncheckedUpdateManyWithoutBuildingNestedInput {
  @Field(() => [EventOccurrenceCreateWithoutBuildingInput], { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutBuildingInput)
  create?: Array<EventOccurrenceCreateWithoutBuildingInput>;

  @Field(() => [EventOccurrenceCreateOrConnectWithoutBuildingInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutBuildingInput)
  connectOrCreate?: Array<EventOccurrenceCreateOrConnectWithoutBuildingInput>;

  @Field(() => [EventOccurrenceUpsertWithWhereUniqueWithoutBuildingInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpsertWithWhereUniqueWithoutBuildingInput)
  upsert?: Array<EventOccurrenceUpsertWithWhereUniqueWithoutBuildingInput>;

  @Field(() => EventOccurrenceCreateManyBuildingInputEnvelope, {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateManyBuildingInputEnvelope)
  createMany?: EventOccurrenceCreateManyBuildingInputEnvelope;

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

  @Field(() => [EventOccurrenceUpdateWithWhereUniqueWithoutBuildingInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpdateWithWhereUniqueWithoutBuildingInput)
  update?: Array<EventOccurrenceUpdateWithWhereUniqueWithoutBuildingInput>;

  @Field(() => [EventOccurrenceUpdateManyWithWhereWithoutBuildingInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpdateManyWithWhereWithoutBuildingInput)
  updateMany?: Array<EventOccurrenceUpdateManyWithWhereWithoutBuildingInput>;

  @Field(() => [EventOccurrenceScalarWhereInput], { nullable: true })
  @Type(() => EventOccurrenceScalarWhereInput)
  deleteMany?: Array<EventOccurrenceScalarWhereInput>;
}
