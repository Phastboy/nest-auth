import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutEventsInput } from './building-create-without-events.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutEventsInput } from './building-create-or-connect-without-events.input';
import { BuildingUpsertWithoutEventsInput } from './building-upsert-without-events.input';
import { BuildingWhereInput } from './building-where.input';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateToOneWithWhereWithoutEventsInput } from './building-update-to-one-with-where-without-events.input';

@InputType()
export class BuildingUpdateOneWithoutEventsNestedInput {
  @Field(() => BuildingCreateWithoutEventsInput, { nullable: true })
  @Type(() => BuildingCreateWithoutEventsInput)
  create?: BuildingCreateWithoutEventsInput;

  @Field(() => BuildingCreateOrConnectWithoutEventsInput, { nullable: true })
  @Type(() => BuildingCreateOrConnectWithoutEventsInput)
  connectOrCreate?: BuildingCreateOrConnectWithoutEventsInput;

  @Field(() => BuildingUpsertWithoutEventsInput, { nullable: true })
  @Type(() => BuildingUpsertWithoutEventsInput)
  upsert?: BuildingUpsertWithoutEventsInput;

  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  disconnect?: BuildingWhereInput;

  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  delete?: BuildingWhereInput;

  @Field(() => BuildingWhereUniqueInput, { nullable: true })
  @Type(() => BuildingWhereUniqueInput)
  connect?: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;

  @Field(() => BuildingUpdateToOneWithWhereWithoutEventsInput, {
    nullable: true,
  })
  @Type(() => BuildingUpdateToOneWithWhereWithoutEventsInput)
  update?: BuildingUpdateToOneWithWhereWithoutEventsInput;
}
