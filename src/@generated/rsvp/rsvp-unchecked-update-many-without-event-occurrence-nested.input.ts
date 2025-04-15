import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPCreateWithoutEventOccurrenceInput } from './rsvp-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { RSVPCreateOrConnectWithoutEventOccurrenceInput } from './rsvp-create-or-connect-without-event-occurrence.input';
import { RSVPUpsertWithWhereUniqueWithoutEventOccurrenceInput } from './rsvp-upsert-with-where-unique-without-event-occurrence.input';
import { RSVPCreateManyEventOccurrenceInputEnvelope } from './rsvp-create-many-event-occurrence-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';
import { RSVPUpdateWithWhereUniqueWithoutEventOccurrenceInput } from './rsvp-update-with-where-unique-without-event-occurrence.input';
import { RSVPUpdateManyWithWhereWithoutEventOccurrenceInput } from './rsvp-update-many-with-where-without-event-occurrence.input';
import { RSVPScalarWhereInput } from './rsvp-scalar-where.input';

@InputType()
export class RSVPUncheckedUpdateManyWithoutEventOccurrenceNestedInput {
  @Field(() => [RSVPCreateWithoutEventOccurrenceInput], { nullable: true })
  @Type(() => RSVPCreateWithoutEventOccurrenceInput)
  create?: Array<RSVPCreateWithoutEventOccurrenceInput>;

  @Field(() => [RSVPCreateOrConnectWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => RSVPCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: Array<RSVPCreateOrConnectWithoutEventOccurrenceInput>;

  @Field(() => [RSVPUpsertWithWhereUniqueWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => RSVPUpsertWithWhereUniqueWithoutEventOccurrenceInput)
  upsert?: Array<RSVPUpsertWithWhereUniqueWithoutEventOccurrenceInput>;

  @Field(() => RSVPCreateManyEventOccurrenceInputEnvelope, { nullable: true })
  @Type(() => RSVPCreateManyEventOccurrenceInputEnvelope)
  createMany?: RSVPCreateManyEventOccurrenceInputEnvelope;

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

  @Field(() => [RSVPUpdateWithWhereUniqueWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => RSVPUpdateWithWhereUniqueWithoutEventOccurrenceInput)
  update?: Array<RSVPUpdateWithWhereUniqueWithoutEventOccurrenceInput>;

  @Field(() => [RSVPUpdateManyWithWhereWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => RSVPUpdateManyWithWhereWithoutEventOccurrenceInput)
  updateMany?: Array<RSVPUpdateManyWithWhereWithoutEventOccurrenceInput>;

  @Field(() => [RSVPScalarWhereInput], { nullable: true })
  @Type(() => RSVPScalarWhereInput)
  deleteMany?: Array<RSVPScalarWhereInput>;
}
