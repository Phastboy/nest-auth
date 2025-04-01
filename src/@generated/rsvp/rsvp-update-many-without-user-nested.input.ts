import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPCreateWithoutUserInput } from './rsvp-create-without-user.input';
import { Type } from 'class-transformer';
import { RSVPCreateOrConnectWithoutUserInput } from './rsvp-create-or-connect-without-user.input';
import { RSVPUpsertWithWhereUniqueWithoutUserInput } from './rsvp-upsert-with-where-unique-without-user.input';
import { RSVPCreateManyUserInputEnvelope } from './rsvp-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';
import { RSVPUpdateWithWhereUniqueWithoutUserInput } from './rsvp-update-with-where-unique-without-user.input';
import { RSVPUpdateManyWithWhereWithoutUserInput } from './rsvp-update-many-with-where-without-user.input';
import { RSVPScalarWhereInput } from './rsvp-scalar-where.input';

@InputType()
export class RSVPUpdateManyWithoutUserNestedInput {
  @Field(() => [RSVPCreateWithoutUserInput], { nullable: true })
  @Type(() => RSVPCreateWithoutUserInput)
  create?: Array<RSVPCreateWithoutUserInput>;

  @Field(() => [RSVPCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => RSVPCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<RSVPCreateOrConnectWithoutUserInput>;

  @Field(() => [RSVPUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => RSVPUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<RSVPUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => RSVPCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => RSVPCreateManyUserInputEnvelope)
  createMany?: RSVPCreateManyUserInputEnvelope;

  @Field(() => [RSVPWhereUniqueInput], { nullable: true })
  @Type(() => RSVPWhereUniqueInput)
  set?: Array<Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>>;

  @Field(() => [RSVPWhereUniqueInput], { nullable: true })
  @Type(() => RSVPWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>
  >;

  @Field(() => [RSVPWhereUniqueInput], { nullable: true })
  @Type(() => RSVPWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>>;

  @Field(() => [RSVPWhereUniqueInput], { nullable: true })
  @Type(() => RSVPWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>
  >;

  @Field(() => [RSVPUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => RSVPUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<RSVPUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [RSVPUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => RSVPUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<RSVPUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [RSVPScalarWhereInput], { nullable: true })
  @Type(() => RSVPScalarWhereInput)
  deleteMany?: Array<RSVPScalarWhereInput>;
}
