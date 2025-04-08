import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutEventInput } from './like-update-without-event.input';
import { LikeCreateWithoutEventInput } from './like-create-without-event.input';

@InputType()
export class LikeUpsertWithWhereUniqueWithoutEventInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>;

    @Field(() => LikeUpdateWithoutEventInput, {nullable:false})
    @Type(() => LikeUpdateWithoutEventInput)
    update!: LikeUpdateWithoutEventInput;

    @Field(() => LikeCreateWithoutEventInput, {nullable:false})
    @Type(() => LikeCreateWithoutEventInput)
    create!: LikeCreateWithoutEventInput;
}
