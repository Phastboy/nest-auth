import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Room } from '../room/room.model';
import { Event } from '../event/event.model';
import { BuildingCount } from './building-count.output';

@ObjectType()
export class Building {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    number!: number | null;

    @Field(() => String, {nullable:true})
    road!: string | null;

    @Field(() => String, {nullable:true})
    landmark!: string | null;

    @Field(() => String, {nullable:true})
    area!: string | null;

    @Field(() => Float, {nullable:false})
    longitude!: number;

    @Field(() => Float, {nullable:false})
    latitude!: number;

    @Field(() => Int, {nullable:true})
    capacity!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [Room], {nullable:true})
    rooms?: Array<Room>;

    @Field(() => [Event], {nullable:true})
    events?: Array<Event>;

    @Field(() => BuildingCount, {nullable:false})
    _count?: BuildingCount;
}
