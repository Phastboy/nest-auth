import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutBuildingInput } from './event-create-without-building.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutBuildingInput } from './event-create-or-connect-without-building.input';
import { EventCreateManyBuildingInputEnvelope } from './event-create-many-building-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventUncheckedCreateNestedManyWithoutBuildingInput {
  @Field(() => [EventCreateWithoutBuildingInput], { nullable: true })
  @Type(() => EventCreateWithoutBuildingInput)
  create?: Array<EventCreateWithoutBuildingInput>;

  @Field(() => [EventCreateOrConnectWithoutBuildingInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutBuildingInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutBuildingInput>;

  @Field(() => EventCreateManyBuildingInputEnvelope, { nullable: true })
  @Type(() => EventCreateManyBuildingInputEnvelope)
  createMany?: EventCreateManyBuildingInputEnvelope;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
