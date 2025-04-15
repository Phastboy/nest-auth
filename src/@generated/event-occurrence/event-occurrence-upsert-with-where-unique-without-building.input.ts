import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceUpdateWithoutBuildingInput } from './event-occurrence-update-without-building.input';
import { EventOccurrenceCreateWithoutBuildingInput } from './event-occurrence-create-without-building.input';

@InputType()
export class EventOccurrenceUpsertWithWhereUniqueWithoutBuildingInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceUpdateWithoutBuildingInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutBuildingInput)
  update!: EventOccurrenceUpdateWithoutBuildingInput;

  @Field(() => EventOccurrenceCreateWithoutBuildingInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutBuildingInput)
  create!: EventOccurrenceCreateWithoutBuildingInput;
}
