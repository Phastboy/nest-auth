import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RoomCreateNestedManyWithoutBuildingInput } from '../room/room-create-nested-many-without-building.input';

@InputType()
export class BuildingCreateWithoutEventsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    number?: number;

    @Field(() => String, {nullable:true})
    road?: string;

    @Field(() => String, {nullable:true})
    landmark?: string;

    @Field(() => String, {nullable:true})
    area?: string;

    @Field(() => Float, {nullable:false})
    longitude!: number;

    @Field(() => Float, {nullable:false})
    latitude!: number;

    @Field(() => Int, {nullable:true})
    capacity?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => RoomCreateNestedManyWithoutBuildingInput, {nullable:true})
    rooms?: RoomCreateNestedManyWithoutBuildingInput;
}
