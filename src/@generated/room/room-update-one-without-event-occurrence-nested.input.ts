import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutEventOccurrenceInput } from './room-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { RoomCreateOrConnectWithoutEventOccurrenceInput } from './room-create-or-connect-without-event-occurrence.input';
import { RoomUpsertWithoutEventOccurrenceInput } from './room-upsert-without-event-occurrence.input';
import { RoomWhereInput } from './room-where.input';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomUpdateToOneWithWhereWithoutEventOccurrenceInput } from './room-update-to-one-with-where-without-event-occurrence.input';

@InputType()
export class RoomUpdateOneWithoutEventOccurrenceNestedInput {
  @Field(() => RoomCreateWithoutEventOccurrenceInput, { nullable: true })
  @Type(() => RoomCreateWithoutEventOccurrenceInput)
  create?: RoomCreateWithoutEventOccurrenceInput;

  @Field(() => RoomCreateOrConnectWithoutEventOccurrenceInput, {
    nullable: true,
  })
  @Type(() => RoomCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: RoomCreateOrConnectWithoutEventOccurrenceInput;

  @Field(() => RoomUpsertWithoutEventOccurrenceInput, { nullable: true })
  @Type(() => RoomUpsertWithoutEventOccurrenceInput)
  upsert?: RoomUpsertWithoutEventOccurrenceInput;

  @Field(() => RoomWhereInput, { nullable: true })
  @Type(() => RoomWhereInput)
  disconnect?: RoomWhereInput;

  @Field(() => RoomWhereInput, { nullable: true })
  @Type(() => RoomWhereInput)
  delete?: RoomWhereInput;

  @Field(() => RoomWhereUniqueInput, { nullable: true })
  @Type(() => RoomWhereUniqueInput)
  connect?: Prisma.AtLeast<RoomWhereUniqueInput, 'id'>;

  @Field(() => RoomUpdateToOneWithWhereWithoutEventOccurrenceInput, {
    nullable: true,
  })
  @Type(() => RoomUpdateToOneWithWhereWithoutEventOccurrenceInput)
  update?: RoomUpdateToOneWithWhereWithoutEventOccurrenceInput;
}
