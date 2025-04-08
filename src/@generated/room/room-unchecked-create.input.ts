import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventUncheckedCreateNestedManyWithoutRoomInput } from '../event/event-unchecked-create-nested-many-without-room.input';

@InputType()
export class RoomUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    buildingId!: number;

    @Field(() => Int, {nullable:true})
    capacity?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => EventUncheckedCreateNestedManyWithoutRoomInput, {nullable:true})
    events?: EventUncheckedCreateNestedManyWithoutRoomInput;
}
