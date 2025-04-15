import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereInput } from './building-where.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutEventOccurrenceInput } from './building-update-without-event-occurrence.input';

@InputType()
export class BuildingUpdateToOneWithWhereWithoutEventOccurrenceInput {
  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  where?: BuildingWhereInput;

  @Field(() => BuildingUpdateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => BuildingUpdateWithoutEventOccurrenceInput)
  data!: BuildingUpdateWithoutEventOccurrenceInput;
}
