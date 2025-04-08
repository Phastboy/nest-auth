import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateManyBuildingInput } from './room-create-many-building.input';
import { Type } from 'class-transformer';

@InputType()
export class RoomCreateManyBuildingInputEnvelope {
  @Field(() => [RoomCreateManyBuildingInput], { nullable: false })
  @Type(() => RoomCreateManyBuildingInput)
  data!: Array<RoomCreateManyBuildingInput>;
}
