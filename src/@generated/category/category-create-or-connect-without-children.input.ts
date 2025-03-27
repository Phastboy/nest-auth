import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutChildrenInput } from './category-create-without-children.input';

@InputType()
export class CategoryCreateOrConnectWithoutChildrenInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>;

    @Field(() => CategoryCreateWithoutChildrenInput, {nullable:false})
    @Type(() => CategoryCreateWithoutChildrenInput)
    create!: CategoryCreateWithoutChildrenInput;
}
