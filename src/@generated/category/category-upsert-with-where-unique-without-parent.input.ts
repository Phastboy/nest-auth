import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutParentInput } from './category-update-without-parent.input';
import { CategoryCreateWithoutParentInput } from './category-create-without-parent.input';

@InputType()
export class CategoryUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>;

    @Field(() => CategoryUpdateWithoutParentInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutParentInput)
    update!: CategoryUpdateWithoutParentInput;

    @Field(() => CategoryCreateWithoutParentInput, {nullable:false})
    @Type(() => CategoryCreateWithoutParentInput)
    create!: CategoryCreateWithoutParentInput;
}
