import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutChildrenInput } from './category-create-without-children.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutChildrenInput } from './category-create-or-connect-without-children.input';
import { CategoryUpsertWithoutChildrenInput } from './category-upsert-without-children.input';
import { CategoryWhereInput } from './category-where.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutChildrenInput } from './category-update-to-one-with-where-without-children.input';

@InputType()
export class CategoryUpdateOneWithoutChildrenNestedInput {

    @Field(() => CategoryCreateWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryCreateWithoutChildrenInput)
    create?: CategoryCreateWithoutChildrenInput;

    @Field(() => CategoryCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => CategoryUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutChildrenInput)
    upsert?: CategoryUpsertWithoutChildrenInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    disconnect?: CategoryWhereInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    delete?: CategoryWhereInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>;

    @Field(() => CategoryUpdateToOneWithWhereWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutChildrenInput)
    update?: CategoryUpdateToOneWithWhereWithoutChildrenInput;
}
