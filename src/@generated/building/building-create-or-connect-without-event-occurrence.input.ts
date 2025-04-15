import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutEventOccurrenceInput } from './building-create-without-event-occurrence.input';

@InputType()
export class BuildingCreateOrConnectWithoutEventOccurrenceInput {
  @Field(() => BuildingWhereUniqueInput, { nullable: false })
  @Type(() => BuildingWhereUniqueInput)
  where!: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;

  @Field(() => BuildingCreateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => BuildingCreateWithoutEventOccurrenceInput)
  create!: BuildingCreateWithoutEventOccurrenceInput;
}
