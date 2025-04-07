import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereInput } from './building-where.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutRoomsInput } from './building-update-without-rooms.input';

@InputType()
export class BuildingUpdateToOneWithWhereWithoutRoomsInput {
  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  where?: BuildingWhereInput;

  @Field(() => BuildingUpdateWithoutRoomsInput, { nullable: false })
  @Type(() => BuildingUpdateWithoutRoomsInput)
  data!: BuildingUpdateWithoutRoomsInput;
}
