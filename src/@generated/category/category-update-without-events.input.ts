import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUpdateOneWithoutChildrenNestedInput } from './category-update-one-without-children-nested.input';
import { CategoryUpdateManyWithoutParentNestedInput } from './category-update-many-without-parent-nested.input';
import { PostUpdateManyWithoutCategoriesNestedInput } from '../post/post-update-many-without-categories-nested.input';

@InputType()
export class CategoryUpdateWithoutEventsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: CategoryUpdateOneWithoutChildrenNestedInput;

    @Field(() => CategoryUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: CategoryUpdateManyWithoutParentNestedInput;

    @Field(() => PostUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutCategoriesNestedInput;
}
