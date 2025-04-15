import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutEventOccurrenceInput } from './comment-update-without-event-occurrence.input';
import { CommentCreateWithoutEventOccurrenceInput } from './comment-create-without-event-occurrence.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutEventOccurrenceInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => CommentUpdateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => CommentUpdateWithoutEventOccurrenceInput)
  update!: CommentUpdateWithoutEventOccurrenceInput;

  @Field(() => CommentCreateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => CommentCreateWithoutEventOccurrenceInput)
  create!: CommentCreateWithoutEventOccurrenceInput;
}
