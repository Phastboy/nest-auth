import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUpdateOneWithoutChildrenNestedInput } from './category-update-one-without-children-nested.input';
import { PostUpdateManyWithoutCategoriesNestedInput } from '../post/post-update-many-without-categories-nested.input';
import { EventUpdateManyWithoutCategoriesNestedInput } from '../event/event-update-many-without-categories-nested.input';

@InputType()
export class CategoryUpdateWithoutChildrenInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  slug?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => CategoryUpdateOneWithoutChildrenNestedInput, { nullable: true })
  parent?: CategoryUpdateOneWithoutChildrenNestedInput;

  @Field(() => PostUpdateManyWithoutCategoriesNestedInput, { nullable: true })
  posts?: PostUpdateManyWithoutCategoriesNestedInput;

  @Field(() => EventUpdateManyWithoutCategoriesNestedInput, { nullable: true })
  events?: EventUpdateManyWithoutCategoriesNestedInput;
}
