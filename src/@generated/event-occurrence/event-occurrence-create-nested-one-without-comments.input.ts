import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutCommentsInput } from './event-occurrence-create-without-comments.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutCommentsInput } from './event-occurrence-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';

@InputType()
export class EventOccurrenceCreateNestedOneWithoutCommentsInput {
  @Field(() => EventOccurrenceCreateWithoutCommentsInput, { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutCommentsInput)
  create?: EventOccurrenceCreateWithoutCommentsInput;

  @Field(() => EventOccurrenceCreateOrConnectWithoutCommentsInput, {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: EventOccurrenceCreateOrConnectWithoutCommentsInput;

  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;
}
