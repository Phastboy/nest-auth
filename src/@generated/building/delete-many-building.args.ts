import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingWhereInput } from './building-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyBuildingArgs {
  @Field(() => BuildingWhereInput, { nullable: true })
  @Type(() => BuildingWhereInput)
  where?: BuildingWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
