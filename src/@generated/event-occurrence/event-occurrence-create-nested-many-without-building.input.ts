import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutBuildingInput } from './event-occurrence-create-without-building.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutBuildingInput } from './event-occurrence-create-or-connect-without-building.input';
import { EventOccurrenceCreateManyBuildingInputEnvelope } from './event-occurrence-create-many-building-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';

@InputType()
export class EventOccurrenceCreateNestedManyWithoutBuildingInput {
  @Field(() => [EventOccurrenceCreateWithoutBuildingInput], { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutBuildingInput)
  create?: Array<EventOccurrenceCreateWithoutBuildingInput>;

  @Field(() => [EventOccurrenceCreateOrConnectWithoutBuildingInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutBuildingInput)
  connectOrCreate?: Array<EventOccurrenceCreateOrConnectWithoutBuildingInput>;

  @Field(() => EventOccurrenceCreateManyBuildingInputEnvelope, {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateManyBuildingInputEnvelope)
  createMany?: EventOccurrenceCreateManyBuildingInputEnvelope;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;
}
