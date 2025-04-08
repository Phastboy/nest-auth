import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'eventId'>;

    @Field(() => PostUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => PostUpdateWithoutCategoriesInput)
    data!: PostUpdateWithoutCategoriesInput;
}
