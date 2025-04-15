import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Building } from '../building/building.model';
import { EventOccurrence } from '../event-occurrence/event-occurrence.model';
import { RoomCount } from './room-count.output';

@ObjectType()
export class Room {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: false })
  buildingId!: number;

  @Field(() => Int, { nullable: true })
  capacity!: number | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Building, { nullable: false })
  building?: Building;

  @Field(() => [EventOccurrence], { nullable: true })
  EventOccurrence?: Array<EventOccurrence>;

  @Field(() => RoomCount, { nullable: false })
  _count?: RoomCount;
}
