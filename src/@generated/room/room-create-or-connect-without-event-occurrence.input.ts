import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { Type } from 'class-transformer';
import { RoomCreateWithoutEventOccurrenceInput } from './room-create-without-event-occurrence.input';

@InputType()
export class RoomCreateOrConnectWithoutEventOccurrenceInput {
  @Field(() => RoomWhereUniqueInput, { nullable: false })
  @Type(() => RoomWhereUniqueInput)
  where!: Prisma.AtLeast<RoomWhereUniqueInput, 'id'>;

  @Field(() => RoomCreateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => RoomCreateWithoutEventOccurrenceInput)
  create!: RoomCreateWithoutEventOccurrenceInput;
}
