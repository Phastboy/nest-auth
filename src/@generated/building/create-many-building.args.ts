import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingCreateManyInput } from './building-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBuildingArgs {

    @Field(() => [BuildingCreateManyInput], {nullable:false})
    @Type(() => BuildingCreateManyInput)
    data!: Array<BuildingCreateManyInput>;
}
