import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutRoomsInput } from './building-create-without-rooms.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutRoomsInput } from './building-create-or-connect-without-rooms.input';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingCreateNestedOneWithoutRoomsInput {
  @Field(() => BuildingCreateWithoutRoomsInput, { nullable: true })
  @Type(() => BuildingCreateWithoutRoomsInput)
  create?: BuildingCreateWithoutRoomsInput;

  @Field(() => BuildingCreateOrConnectWithoutRoomsInput, { nullable: true })
  @Type(() => BuildingCreateOrConnectWithoutRoomsInput)
  connectOrCreate?: BuildingCreateOrConnectWithoutRoomsInput;

  @Field(() => BuildingWhereUniqueInput, { nullable: true })
  @Type(() => BuildingWhereUniqueInput)
  connect?: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;
}
