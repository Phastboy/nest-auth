import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutEventInput } from './like-create-without-event.input';

@InputType()
export class LikeCreateOrConnectWithoutEventInput {
  @Field(() => LikeWhereUniqueInput, { nullable: false })
  @Type(() => LikeWhereUniqueInput)
  where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>;

  @Field(() => LikeCreateWithoutEventInput, { nullable: false })
  @Type(() => LikeCreateWithoutEventInput)
  create!: LikeCreateWithoutEventInput;
}
