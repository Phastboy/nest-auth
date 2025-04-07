import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { Type } from 'class-transformer';
import { RoomCreateWithoutEventsInput } from './room-create-without-events.input';

@InputType()
export class RoomCreateOrConnectWithoutEventsInput {
  @Field(() => RoomWhereUniqueInput, { nullable: false })
  @Type(() => RoomWhereUniqueInput)
  where!: Prisma.AtLeast<RoomWhereUniqueInput, 'id'>;

  @Field(() => RoomCreateWithoutEventsInput, { nullable: false })
  @Type(() => RoomCreateWithoutEventsInput)
  create!: RoomCreateWithoutEventsInput;
}
