import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingCreateInput } from './building-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBuildingArgs {

    @Field(() => BuildingCreateInput, {nullable:false})
    @Type(() => BuildingCreateInput)
    data!: BuildingCreateInput;
}
