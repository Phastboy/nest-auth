import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutEventOccurrenceInput } from './like-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutEventOccurrenceInput } from './like-create-or-connect-without-event-occurrence.input';
import { LikeUpsertWithWhereUniqueWithoutEventOccurrenceInput } from './like-upsert-with-where-unique-without-event-occurrence.input';
import { LikeCreateManyEventOccurrenceInputEnvelope } from './like-create-many-event-occurrence-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutEventOccurrenceInput } from './like-update-with-where-unique-without-event-occurrence.input';
import { LikeUpdateManyWithWhereWithoutEventOccurrenceInput } from './like-update-many-with-where-without-event-occurrence.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUpdateManyWithoutEventOccurrenceNestedInput {
  @Field(() => [LikeCreateWithoutEventOccurrenceInput], { nullable: true })
  @Type(() => LikeCreateWithoutEventOccurrenceInput)
  create?: Array<LikeCreateWithoutEventOccurrenceInput>;

  @Field(() => [LikeCreateOrConnectWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => LikeCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: Array<LikeCreateOrConnectWithoutEventOccurrenceInput>;

  @Field(() => [LikeUpsertWithWhereUniqueWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => LikeUpsertWithWhereUniqueWithoutEventOccurrenceInput)
  upsert?: Array<LikeUpsertWithWhereUniqueWithoutEventOccurrenceInput>;

  @Field(() => LikeCreateManyEventOccurrenceInputEnvelope, { nullable: true })
  @Type(() => LikeCreateManyEventOccurrenceInputEnvelope)
  createMany?: LikeCreateManyEventOccurrenceInputEnvelope;

  @Field(() => [LikeWhereUniqueInput], { nullable: true })
  @Type(() => LikeWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>
  >;

  @Field(() => [LikeWhereUniqueInput], { nullable: true })
  @Type(() => LikeWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>
  >;

  @Field(() => [LikeWhereUniqueInput], { nullable: true })
  @Type(() => LikeWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>
  >;

  @Field(() => [LikeWhereUniqueInput], { nullable: true })
  @Type(() => LikeWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>
  >;

  @Field(() => [LikeUpdateWithWhereUniqueWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => LikeUpdateWithWhereUniqueWithoutEventOccurrenceInput)
  update?: Array<LikeUpdateWithWhereUniqueWithoutEventOccurrenceInput>;

  @Field(() => [LikeUpdateManyWithWhereWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => LikeUpdateManyWithWhereWithoutEventOccurrenceInput)
  updateMany?: Array<LikeUpdateManyWithWhereWithoutEventOccurrenceInput>;

  @Field(() => [LikeScalarWhereInput], { nullable: true })
  @Type(() => LikeScalarWhereInput)
  deleteMany?: Array<LikeScalarWhereInput>;
}
