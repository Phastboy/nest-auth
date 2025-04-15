import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateWithoutBuildingInput } from './event-occurrence-create-without-building.input';

@InputType()
export class EventOccurrenceCreateOrConnectWithoutBuildingInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceCreateWithoutBuildingInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutBuildingInput)
  create!: EventOccurrenceCreateWithoutBuildingInput;
}
