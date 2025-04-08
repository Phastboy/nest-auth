import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereInput } from './building-where.input';

@InputType()
export class BuildingNullableScalarRelationFilter {

    @Field(() => BuildingWhereInput, {nullable:true})
    is?: BuildingWhereInput;

    @Field(() => BuildingWhereInput, {nullable:true})
    isNot?: BuildingWhereInput;
}
