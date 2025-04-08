import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomUpdateWithoutEventsInput } from './room-update-without-events.input';
import { Type } from 'class-transformer';
import { RoomCreateWithoutEventsInput } from './room-create-without-events.input';
import { RoomWhereInput } from './room-where.input';

@InputType()
export class RoomUpsertWithoutEventsInput {

    @Field(() => RoomUpdateWithoutEventsInput, {nullable:false})
    @Type(() => RoomUpdateWithoutEventsInput)
    update!: RoomUpdateWithoutEventsInput;

    @Field(() => RoomCreateWithoutEventsInput, {nullable:false})
    @Type(() => RoomCreateWithoutEventsInput)
    create!: RoomCreateWithoutEventsInput;

    @Field(() => RoomWhereInput, {nullable:true})
    @Type(() => RoomWhereInput)
    where?: RoomWhereInput;
}
