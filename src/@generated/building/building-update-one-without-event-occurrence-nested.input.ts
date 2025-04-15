import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutEventOccurrenceInput } from './building-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutEventOccurrenceInput } from './building-create-or-connect-without-event-occurrence.input';
import { BuildingUpsertWithoutEventOccurrenceInput } from './building-upsert-without-event-occurrence.input';
import { BuildingWhereInput } from './building-where.input';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateToOneWithWhereWithoutEventOccurrenceInput } from './building-update-to-one-with-where-without-event-occurrence.input';

@InputType()
export class BuildingUpdateOneWithoutEventOccurrenceNestedInput {
  @Field(() => BuildingCreateWithoutEventOccurrenceInput, { nullable: true })
  @Type(() => BuildingCreateWithoutEventOccurrenceInput)
  create?: BuildingCreateWithoutEventOccurrenceInput;

  @Field(() => BuildingCreateOrConnectWithoutEventOccurrenceInput, {
    nullable: true,
  })
  @Type(() => BuildingCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: BuildingCreateOrConnectWithoutEventOccurrenceInput;

  @Field(() => BuildingUpsertWithoutEventOccurrenceInput, { nullable: true })
  @Type(() => BuildingUpsertWithoutEventOccurrenceInput)
  upsert?: BuildingUpsertWithoutEventOccurrenceInput;

  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  disconnect?: BuildingWhereInput;

  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  delete?: BuildingWhereInput;

  @Field(() => BuildingWhereUniqueInput, { nullable: true })
  @Type(() => BuildingWhereUniqueInput)
  connect?: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;

  @Field(() => BuildingUpdateToOneWithWhereWithoutEventOccurrenceInput, {
    nullable: true,
  })
  @Type(() => BuildingUpdateToOneWithWhereWithoutEventOccurrenceInput)
  update?: BuildingUpdateToOneWithWhereWithoutEventOccurrenceInput;
}
