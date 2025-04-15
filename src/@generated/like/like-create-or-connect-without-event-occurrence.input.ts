import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutEventOccurrenceInput } from './like-create-without-event-occurrence.input';

@InputType()
export class LikeCreateOrConnectWithoutEventOccurrenceInput {
  @Field(() => LikeWhereUniqueInput, { nullable: false })
  @Type(() => LikeWhereUniqueInput)
  where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>;

  @Field(() => LikeCreateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => LikeCreateWithoutEventOccurrenceInput)
  create!: LikeCreateWithoutEventOccurrenceInput;
}
