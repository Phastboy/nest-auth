import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutParentNestedInput } from './category-unchecked-update-many-without-parent-nested.input';
import { EventUncheckedUpdateManyWithoutCategoriesNestedInput } from '../event/event-unchecked-update-many-without-categories-nested.input';

@InputType()
export class CategoryUncheckedUpdateWithoutPostsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CategoryUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => EventUncheckedUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    events?: EventUncheckedUpdateManyWithoutCategoriesNestedInput;
}
