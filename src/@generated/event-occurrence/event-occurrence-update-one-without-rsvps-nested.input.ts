import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutRsvpsInput } from './event-occurrence-create-without-rsvps.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutRsvpsInput } from './event-occurrence-create-or-connect-without-rsvps.input';
import { EventOccurrenceUpsertWithoutRsvpsInput } from './event-occurrence-upsert-without-rsvps.input';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { EventOccurrenceUpdateToOneWithWhereWithoutRsvpsInput } from './event-occurrence-update-to-one-with-where-without-rsvps.input';

@InputType()
export class EventOccurrenceUpdateOneWithoutRsvpsNestedInput {
  @Field(() => EventOccurrenceCreateWithoutRsvpsInput, { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutRsvpsInput)
  create?: EventOccurrenceCreateWithoutRsvpsInput;

  @Field(() => EventOccurrenceCreateOrConnectWithoutRsvpsInput, {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutRsvpsInput)
  connectOrCreate?: EventOccurrenceCreateOrConnectWithoutRsvpsInput;

  @Field(() => EventOccurrenceUpsertWithoutRsvpsInput, { nullable: true })
  @Type(() => EventOccurrenceUpsertWithoutRsvpsInput)
  upsert?: EventOccurrenceUpsertWithoutRsvpsInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  disconnect?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  delete?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceUpdateToOneWithWhereWithoutRsvpsInput, {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpdateToOneWithWhereWithoutRsvpsInput)
  update?: EventOccurrenceUpdateToOneWithWhereWithoutRsvpsInput;
}
