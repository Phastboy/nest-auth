import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutParentInput } from './category-unchecked-create-nested-many-without-parent.input';
import { EventUncheckedCreateNestedManyWithoutCategoriesInput } from '../event/event-unchecked-create-nested-many-without-categories.input';

@InputType()
export class CategoryUncheckedCreateWithoutPostsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => EventUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    events?: EventUncheckedCreateNestedManyWithoutCategoriesInput;
}
