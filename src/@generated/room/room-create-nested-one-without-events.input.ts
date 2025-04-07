import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutEventsInput } from './room-create-without-events.input';
import { Type } from 'class-transformer';
import { RoomCreateOrConnectWithoutEventsInput } from './room-create-or-connect-without-events.input';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';

@InputType()
export class RoomCreateNestedOneWithoutEventsInput {
  @Field(() => RoomCreateWithoutEventsInput, { nullable: true })
  @Type(() => RoomCreateWithoutEventsInput)
  create?: RoomCreateWithoutEventsInput;

  @Field(() => RoomCreateOrConnectWithoutEventsInput, { nullable: true })
  @Type(() => RoomCreateOrConnectWithoutEventsInput)
  connectOrCreate?: RoomCreateOrConnectWithoutEventsInput;

  @Field(() => RoomWhereUniqueInput, { nullable: true })
  @Type(() => RoomWhereUniqueInput)
  connect?: Prisma.AtLeast<RoomWhereUniqueInput, 'id'>;
}
