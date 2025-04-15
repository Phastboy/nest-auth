import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutEventOccurrenceInput } from './comment-create-without-event-occurrence.input';

@InputType()
export class CommentCreateOrConnectWithoutEventOccurrenceInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => CommentCreateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => CommentCreateWithoutEventOccurrenceInput)
  create!: CommentCreateWithoutEventOccurrenceInput;
}
