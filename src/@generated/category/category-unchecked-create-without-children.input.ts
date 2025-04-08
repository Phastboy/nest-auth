import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutCategoriesInput } from '../post/post-unchecked-create-nested-many-without-categories.input';
import { EventUncheckedCreateNestedManyWithoutCategoriesInput } from '../event/event-unchecked-create-nested-many-without-categories.input';

@InputType()
export class CategoryUncheckedCreateWithoutChildrenInput {

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

    @Field(() => PostUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutCategoriesInput;

    @Field(() => EventUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    events?: EventUncheckedCreateNestedManyWithoutCategoriesInput;
}
