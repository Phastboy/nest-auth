import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutEventInput } from './comment-create-without-event.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutEventInput } from './comment-create-or-connect-without-event.input';
import { CommentCreateManyEventInputEnvelope } from './comment-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutEventInput {
  @Field(() => [CommentCreateWithoutEventInput], { nullable: true })
  @Type(() => CommentCreateWithoutEventInput)
  create?: Array<CommentCreateWithoutEventInput>;

  @Field(() => [CommentCreateOrConnectWithoutEventInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutEventInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutEventInput>;

  @Field(() => CommentCreateManyEventInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyEventInputEnvelope)
  createMany?: CommentCreateManyEventInputEnvelope;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
