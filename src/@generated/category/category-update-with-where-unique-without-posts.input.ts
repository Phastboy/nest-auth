import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutPostsInput } from './category-update-without-posts.input';

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutPostsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>;

    @Field(() => CategoryUpdateWithoutPostsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutPostsInput)
    data!: CategoryUpdateWithoutPostsInput;
}
