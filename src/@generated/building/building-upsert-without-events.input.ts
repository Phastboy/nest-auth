import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingUpdateWithoutEventsInput } from './building-update-without-events.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutEventsInput } from './building-create-without-events.input';
import { BuildingWhereInput } from './building-where.input';

@InputType()
export class BuildingUpsertWithoutEventsInput {

    @Field(() => BuildingUpdateWithoutEventsInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutEventsInput)
    update!: BuildingUpdateWithoutEventsInput;

    @Field(() => BuildingCreateWithoutEventsInput, {nullable:false})
    @Type(() => BuildingCreateWithoutEventsInput)
    create!: BuildingCreateWithoutEventsInput;

    @Field(() => BuildingWhereInput, {nullable:true})
    @Type(() => BuildingWhereInput)
    where?: BuildingWhereInput;
}
