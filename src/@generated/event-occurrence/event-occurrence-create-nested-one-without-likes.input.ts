import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutLikesInput } from './event-occurrence-create-without-likes.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutLikesInput } from './event-occurrence-create-or-connect-without-likes.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';

@InputType()
export class EventOccurrenceCreateNestedOneWithoutLikesInput {
  @Field(() => EventOccurrenceCreateWithoutLikesInput, { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutLikesInput)
  create?: EventOccurrenceCreateWithoutLikesInput;

  @Field(() => EventOccurrenceCreateOrConnectWithoutLikesInput, {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutLikesInput)
  connectOrCreate?: EventOccurrenceCreateOrConnectWithoutLikesInput;

  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;
}
