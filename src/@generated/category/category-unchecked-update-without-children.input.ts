import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUncheckedUpdateManyWithoutCategoriesNestedInput } from '../post/post-unchecked-update-many-without-categories-nested.input';
import { EventUncheckedUpdateManyWithoutCategoriesNestedInput } from '../event/event-unchecked-update-many-without-categories-nested.input';

@InputType()
export class CategoryUncheckedUpdateWithoutChildrenInput {
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

  @Field(() => PostUncheckedUpdateManyWithoutCategoriesNestedInput, {
    nullable: true,
  })
  posts?: PostUncheckedUpdateManyWithoutCategoriesNestedInput;

  @Field(() => EventUncheckedUpdateManyWithoutCategoriesNestedInput, {
    nullable: true,
  })
  events?: EventUncheckedUpdateManyWithoutCategoriesNestedInput;
}
