import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CommentUncheckedUpdateWithoutRepliesInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  content?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  userId?: IntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  postId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  eventId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  parentId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;
}
