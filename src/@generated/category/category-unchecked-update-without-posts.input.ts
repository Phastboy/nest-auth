import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutParentNestedInput } from './category-unchecked-update-many-without-parent-nested.input';
import { EventUncheckedUpdateManyWithoutCategoriesNestedInput } from '../event/event-unchecked-update-many-without-categories-nested.input';

@InputType()
export class CategoryUncheckedUpdateWithoutPostsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  slug?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  parentId?: NullableStringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => CategoryUncheckedUpdateManyWithoutParentNestedInput, {
    nullable: true,
  })
  children?: CategoryUncheckedUpdateManyWithoutParentNestedInput;

  @Field(() => EventUncheckedUpdateManyWithoutCategoriesNestedInput, {
    nullable: true,
  })
  events?: EventUncheckedUpdateManyWithoutCategoriesNestedInput;
}
