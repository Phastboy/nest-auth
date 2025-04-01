import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutEventInput } from './comment-update-without-event.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutEventInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => CommentUpdateWithoutEventInput, { nullable: false })
  @Type(() => CommentUpdateWithoutEventInput)
  data!: CommentUpdateWithoutEventInput;
}
