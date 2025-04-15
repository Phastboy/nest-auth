import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingUpdateWithoutEventOccurrenceInput } from './building-update-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutEventOccurrenceInput } from './building-create-without-event-occurrence.input';
import { BuildingWhereInput } from './building-where.input';

@InputType()
export class BuildingUpsertWithoutEventOccurrenceInput {
  @Field(() => BuildingUpdateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => BuildingUpdateWithoutEventOccurrenceInput)
  update!: BuildingUpdateWithoutEventOccurrenceInput;

  @Field(() => BuildingCreateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => BuildingCreateWithoutEventOccurrenceInput)
  create!: BuildingCreateWithoutEventOccurrenceInput;

  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  where?: BuildingWhereInput;
}
