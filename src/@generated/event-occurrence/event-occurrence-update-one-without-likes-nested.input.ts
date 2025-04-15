import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutLikesInput } from './event-occurrence-create-without-likes.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutLikesInput } from './event-occurrence-create-or-connect-without-likes.input';
import { EventOccurrenceUpsertWithoutLikesInput } from './event-occurrence-upsert-without-likes.input';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { EventOccurrenceUpdateToOneWithWhereWithoutLikesInput } from './event-occurrence-update-to-one-with-where-without-likes.input';

@InputType()
export class EventOccurrenceUpdateOneWithoutLikesNestedInput {
  @Field(() => EventOccurrenceCreateWithoutLikesInput, { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutLikesInput)
  create?: EventOccurrenceCreateWithoutLikesInput;

  @Field(() => EventOccurrenceCreateOrConnectWithoutLikesInput, {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutLikesInput)
  connectOrCreate?: EventOccurrenceCreateOrConnectWithoutLikesInput;

  @Field(() => EventOccurrenceUpsertWithoutLikesInput, { nullable: true })
  @Type(() => EventOccurrenceUpsertWithoutLikesInput)
  upsert?: EventOccurrenceUpsertWithoutLikesInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  disconnect?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  delete?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceUpdateToOneWithWhereWithoutLikesInput, {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpdateToOneWithWhereWithoutLikesInput)
  update?: EventOccurrenceUpdateToOneWithWhereWithoutLikesInput;
}
