import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutEventOccurrenceInput } from './like-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutEventOccurrenceInput } from './like-create-or-connect-without-event-occurrence.input';
import { LikeCreateManyEventOccurrenceInputEnvelope } from './like-create-many-event-occurrence-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeUncheckedCreateNestedManyWithoutEventOccurrenceInput {
  @Field(() => [LikeCreateWithoutEventOccurrenceInput], { nullable: true })
  @Type(() => LikeCreateWithoutEventOccurrenceInput)
  create?: Array<LikeCreateWithoutEventOccurrenceInput>;

  @Field(() => [LikeCreateOrConnectWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => LikeCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: Array<LikeCreateOrConnectWithoutEventOccurrenceInput>;

  @Field(() => LikeCreateManyEventOccurrenceInputEnvelope, { nullable: true })
  @Type(() => LikeCreateManyEventOccurrenceInputEnvelope)
  createMany?: LikeCreateManyEventOccurrenceInputEnvelope;

  @Field(() => [LikeWhereUniqueInput], { nullable: true })
  @Type(() => LikeWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>
  >;
}
