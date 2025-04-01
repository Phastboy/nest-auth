import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutChildrenInput } from './category-create-nested-one-without-children.input';
import { CategoryCreateNestedManyWithoutParentInput } from './category-create-nested-many-without-parent.input';
import { PostCreateNestedManyWithoutCategoriesInput } from '../post/post-create-nested-many-without-categories.input';

@InputType()
export class CategoryCreateWithoutEventsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CategoryCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: CategoryCreateNestedOneWithoutChildrenInput;

    @Field(() => CategoryCreateNestedManyWithoutParentInput, {nullable:true})
    children?: CategoryCreateNestedManyWithoutParentInput;

    @Field(() => PostCreateNestedManyWithoutCategoriesInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutCategoriesInput;
}
