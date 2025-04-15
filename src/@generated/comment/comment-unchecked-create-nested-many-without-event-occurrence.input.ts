import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutEventOccurrenceInput } from './comment-create-without-event-occurrence.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutEventOccurrenceInput } from './comment-create-or-connect-without-event-occurrence.input';
import { CommentCreateManyEventOccurrenceInputEnvelope } from './comment-create-many-event-occurrence-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutEventOccurrenceInput {
  @Field(() => [CommentCreateWithoutEventOccurrenceInput], { nullable: true })
  @Type(() => CommentCreateWithoutEventOccurrenceInput)
  create?: Array<CommentCreateWithoutEventOccurrenceInput>;

  @Field(() => [CommentCreateOrConnectWithoutEventOccurrenceInput], {
    nullable: true,
  })
  @Type(() => CommentCreateOrConnectWithoutEventOccurrenceInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutEventOccurrenceInput>;

  @Field(() => CommentCreateManyEventOccurrenceInputEnvelope, {
    nullable: true,
  })
  @Type(() => CommentCreateManyEventOccurrenceInputEnvelope)
  createMany?: CommentCreateManyEventOccurrenceInputEnvelope;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
