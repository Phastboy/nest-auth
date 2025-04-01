import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPCreateWithoutEventInput } from './rsvp-create-without-event.input';
import { Type } from 'class-transformer';
import { RSVPCreateOrConnectWithoutEventInput } from './rsvp-create-or-connect-without-event.input';
import { RSVPUpsertWithWhereUniqueWithoutEventInput } from './rsvp-upsert-with-where-unique-without-event.input';
import { RSVPCreateManyEventInputEnvelope } from './rsvp-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';
import { RSVPUpdateWithWhereUniqueWithoutEventInput } from './rsvp-update-with-where-unique-without-event.input';
import { RSVPUpdateManyWithWhereWithoutEventInput } from './rsvp-update-many-with-where-without-event.input';
import { RSVPScalarWhereInput } from './rsvp-scalar-where.input';

@InputType()
export class RSVPUpdateManyWithoutEventNestedInput {
  @Field(() => [RSVPCreateWithoutEventInput], { nullable: true })
  @Type(() => RSVPCreateWithoutEventInput)
  create?: Array<RSVPCreateWithoutEventInput>;

  @Field(() => [RSVPCreateOrConnectWithoutEventInput], { nullable: true })
  @Type(() => RSVPCreateOrConnectWithoutEventInput)
  connectOrCreate?: Array<RSVPCreateOrConnectWithoutEventInput>;

  @Field(() => [RSVPUpsertWithWhereUniqueWithoutEventInput], { nullable: true })
  @Type(() => RSVPUpsertWithWhereUniqueWithoutEventInput)
  upsert?: Array<RSVPUpsertWithWhereUniqueWithoutEventInput>;

  @Field(() => RSVPCreateManyEventInputEnvelope, { nullable: true })
  @Type(() => RSVPCreateManyEventInputEnvelope)
  createMany?: RSVPCreateManyEventInputEnvelope;

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

  @Field(() => [RSVPUpdateWithWhereUniqueWithoutEventInput], { nullable: true })
  @Type(() => RSVPUpdateWithWhereUniqueWithoutEventInput)
  update?: Array<RSVPUpdateWithWhereUniqueWithoutEventInput>;

  @Field(() => [RSVPUpdateManyWithWhereWithoutEventInput], { nullable: true })
  @Type(() => RSVPUpdateManyWithWhereWithoutEventInput)
  updateMany?: Array<RSVPUpdateManyWithWhereWithoutEventInput>;

  @Field(() => [RSVPScalarWhereInput], { nullable: true })
  @Type(() => RSVPScalarWhereInput)
  deleteMany?: Array<RSVPScalarWhereInput>;
}
