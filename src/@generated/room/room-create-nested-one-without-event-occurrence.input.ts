import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutEventOccurrenceInput } from './room-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { RoomCreateOrConnectWithoutEventOccurrenceInput } from './room-create-or-connect-without-event-occurrence.input';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';

@InputType()
export class RoomCreateNestedOneWithoutEventOccurrenceInput {
  @Field(() => RoomCreateWithoutEventOccurrenceInput, { nullable: true })
  @Type(() => RoomCreateWithoutEventOccurrenceInput)
  create?: RoomCreateWithoutEventOccurrenceInput;

  @Field(() => RoomCreateOrConnectWithoutEventOccurrenceInput, {
    nullable: true,
  })
  @Type(() => RoomCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: RoomCreateOrConnectWithoutEventOccurrenceInput;

  @Field(() => RoomWhereUniqueInput, { nullable: true })
  @Type(() => RoomWhereUniqueInput)
  connect?: Prisma.AtLeast<RoomWhereUniqueInput, 'id'>;
}
