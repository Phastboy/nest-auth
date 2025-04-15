import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutCommentsInput } from './event-occurrence-create-without-comments.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutCommentsInput } from './event-occurrence-create-or-connect-without-comments.input';
import { EventOccurrenceUpsertWithoutCommentsInput } from './event-occurrence-upsert-without-comments.input';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { EventOccurrenceUpdateToOneWithWhereWithoutCommentsInput } from './event-occurrence-update-to-one-with-where-without-comments.input';

@InputType()
export class EventOccurrenceUpdateOneWithoutCommentsNestedInput {
  @Field(() => EventOccurrenceCreateWithoutCommentsInput, { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutCommentsInput)
  create?: EventOccurrenceCreateWithoutCommentsInput;

  @Field(() => EventOccurrenceCreateOrConnectWithoutCommentsInput, {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: EventOccurrenceCreateOrConnectWithoutCommentsInput;

  @Field(() => EventOccurrenceUpsertWithoutCommentsInput, { nullable: true })
  @Type(() => EventOccurrenceUpsertWithoutCommentsInput)
  upsert?: EventOccurrenceUpsertWithoutCommentsInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  disconnect?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  delete?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceUpdateToOneWithWhereWithoutCommentsInput, {
    nullable: true,
  })
  @Type(() => EventOccurrenceUpdateToOneWithWhereWithoutCommentsInput)
  update?: EventOccurrenceUpdateToOneWithWhereWithoutCommentsInput;
}
