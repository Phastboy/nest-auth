import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutEventOccurrenceInput } from './comment-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutEventOccurrenceInput } from './comment-create-or-connect-without-event-occurrence.input';
import { CommentUpsertWithWhereUniqueWithoutEventOccurrenceInput } from './comment-upsert-with-where-unique-without-event-occurrence.input';
import { CommentCreateManyEventOccurrenceInputEnvelope } from './comment-create-many-event-occurrence-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutEventOccurrenceInput } from './comment-update-with-where-unique-without-event-occurrence.input';
import { CommentUpdateManyWithWhereWithoutEventOccurrenceInput } from './comment-update-many-with-where-without-event-occurrence.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutEventOccurrenceNestedInput {
  @Field(() => [CommentCreateWithoutEventOccurrenceInput], { nullable: true })
  @Type(() => CommentCreateWithoutEventOccurrenceInput)
  create?: Array<CommentCreateWithoutEventOccurrenceInput>;

  @Field(() => [CommentCreateOrConnectWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => CommentCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutEventOccurrenceInput>;

  @Field(() => [CommentUpsertWithWhereUniqueWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => CommentUpsertWithWhereUniqueWithoutEventOccurrenceInput)
  upsert?: Array<CommentUpsertWithWhereUniqueWithoutEventOccurrenceInput>;

  @Field(() => CommentCreateManyEventOccurrenceInputEnvelope, {
    nullable: true,
  })
  @Type(() => CommentCreateManyEventOccurrenceInputEnvelope)
  createMany?: CommentCreateManyEventOccurrenceInputEnvelope;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentUpdateWithWhereUniqueWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateWithWhereUniqueWithoutEventOccurrenceInput)
  update?: Array<CommentUpdateWithWhereUniqueWithoutEventOccurrenceInput>;

  @Field(() => [CommentUpdateManyWithWhereWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateManyWithWhereWithoutEventOccurrenceInput)
  updateMany?: Array<CommentUpdateManyWithWhereWithoutEventOccurrenceInput>;

  @Field(() => [CommentScalarWhereInput], { nullable: true })
  @Type(() => CommentScalarWhereInput)
  deleteMany?: Array<CommentScalarWhereInput>;
}
