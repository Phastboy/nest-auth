import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutEventOccurrenceInput } from './building-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutEventOccurrenceInput } from './building-create-or-connect-without-event-occurrence.input';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingCreateNestedOneWithoutEventOccurrenceInput {
  @Field(() => BuildingCreateWithoutEventOccurrenceInput, { nullable: true })
  @Type(() => BuildingCreateWithoutEventOccurrenceInput)
  create?: BuildingCreateWithoutEventOccurrenceInput;

  @Field(() => BuildingCreateOrConnectWithoutEventOccurrenceInput, {
    nullable: true,
  })
  @Type(() => BuildingCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: BuildingCreateOrConnectWithoutEventOccurrenceInput;

  @Field(() => BuildingWhereUniqueInput, { nullable: true })
  @Type(() => BuildingWhereUniqueInput)
  connect?: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;
}
