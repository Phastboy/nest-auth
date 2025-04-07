import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingUpdateWithoutRoomsInput } from './building-update-without-rooms.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutRoomsInput } from './building-create-without-rooms.input';
import { BuildingWhereInput } from './building-where.input';

@InputType()
export class BuildingUpsertWithoutRoomsInput {
  @Field(() => BuildingUpdateWithoutRoomsInput, { nullable: false })
  @Type(() => BuildingUpdateWithoutRoomsInput)
  update!: BuildingUpdateWithoutRoomsInput;

  @Field(() => BuildingCreateWithoutRoomsInput, { nullable: false })
  @Type(() => BuildingCreateWithoutRoomsInput)
  create!: BuildingCreateWithoutRoomsInput;

  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  where?: BuildingWhereInput;
}
