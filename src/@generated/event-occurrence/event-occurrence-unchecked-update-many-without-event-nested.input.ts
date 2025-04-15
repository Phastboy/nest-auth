import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutEventInput } from './event-occurrence-create-without-event.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutEventInput } from './event-occurrence-create-or-connect-without-event.input';
import { EventOccurrenceUpsertWithWhereUniqueWithoutEventInput } from './event-occurrence-upsert-with-where-unique-without-event.input';
import { EventOccurrenceCreateManyEventInputEnvelope } from './event-occurrence-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { EventOccurrenceUpdateWithWhereUniqueWithoutEventInput } from './event-occurrence-update-with-where-unique-without-event.input';
import { EventOccurrenceUpdateManyWithWhereWithoutEventInput } from './event-occurrence-update-many-with-where-without-event.input';
import { EventOccurrenceScalarWhereInput } from './event-occurrence-scalar-where.input';

@InputType()
export class EventOccurrenceUncheckedUpdateManyWithoutEventNestedInput {
  @Field(() => [EventOccurrenceCreateWithoutEventInput], { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutEventInput)
  create?: Array<EventOccurrenceCreateWithoutEventInput>;

  @Field(() => [EventOccurrenceCreateOrConnectWithoutEventInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutEventInput)
  connectOrCreate?: Array<EventOccurrenceCreateOrConnectWithoutEventInput>;

  @Field(() => [EventOccurrenceUpsertWithWhereUniqueWithoutEventInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpsertWithWhereUniqueWithoutEventInput)
  upsert?: Array<EventOccurrenceUpsertWithWhereUniqueWithoutEventInput>;

  @Field(() => EventOccurrenceCreateManyEventInputEnvelope, { nullable: true })
  @Type(() => EventOccurrenceCreateManyEventInputEnvelope)
  createMany?: EventOccurrenceCreateManyEventInputEnvelope;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  set?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;

  @Field(() => [EventOccurrenceWhereUniqueInput], { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>>;

  @Field(() => [EventOccurrenceUpdateWithWhereUniqueWithoutEventInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpdateWithWhereUniqueWithoutEventInput)
  update?: Array<EventOccurrenceUpdateWithWhereUniqueWithoutEventInput>;

  @Field(() => [EventOccurrenceUpdateManyWithWhereWithoutEventInput], {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpdateManyWithWhereWithoutEventInput)
  updateMany?: Array<EventOccurrenceUpdateManyWithWhereWithoutEventInput>;

  @Field(() => [EventOccurrenceScalarWhereInput], { nullable: true })
  @Type(() => EventOccurrenceScalarWhereInput)
  deleteMany?: Array<EventOccurrenceScalarWhereInput>;
}
