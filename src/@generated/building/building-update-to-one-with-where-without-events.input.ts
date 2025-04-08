import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereInput } from './building-where.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutEventsInput } from './building-update-without-events.input';

@InputType()
export class BuildingUpdateToOneWithWhereWithoutEventsInput {

    @Field(() => BuildingWhereInput, {nullable:true})
    @Type(() => BuildingWhereInput)
    where?: BuildingWhereInput;

    @Field(() => BuildingUpdateWithoutEventsInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutEventsInput)
    data!: BuildingUpdateWithoutEventsInput;
}
