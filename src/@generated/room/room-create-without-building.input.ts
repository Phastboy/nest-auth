import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventCreateNestedManyWithoutRoomInput } from '../event/event-create-nested-many-without-room.input';

@InputType()
export class RoomCreateWithoutBuildingInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    capacity?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => EventCreateNestedManyWithoutRoomInput, {nullable:true})
    events?: EventCreateNestedManyWithoutRoomInput;
}
