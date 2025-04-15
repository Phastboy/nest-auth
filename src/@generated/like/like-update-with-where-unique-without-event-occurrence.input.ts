import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutEventOccurrenceInput } from './like-update-without-event-occurrence.input';

@InputType()
export class LikeUpdateWithWhereUniqueWithoutEventOccurrenceInput {
  @Field(() => LikeWhereUniqueInput, { nullable: false })
  @Type(() => LikeWhereUniqueInput)
  where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>;

  @Field(() => LikeUpdateWithoutEventOccurrenceInput, { nullable: false })
  @Type(() => LikeUpdateWithoutEventOccurrenceInput)
  data!: LikeUpdateWithoutEventOccurrenceInput;
}
