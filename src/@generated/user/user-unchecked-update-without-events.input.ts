import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUncheckedUpdateManyWithoutUserNestedInput } from '../post/post-unchecked-update-many-without-user-nested.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { NotificationUncheckedUpdateManyWithoutUserNestedInput } from '../notification/notification-unchecked-update-many-without-user-nested.input';
import { LikeUncheckedUpdateManyWithoutUserNestedInput } from '../like/like-unchecked-update-many-without-user-nested.input';
import { RSVPUncheckedUpdateManyWithoutUserNestedInput } from '../rsvp/rsvp-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutEventsInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatar?: NullableStringFieldUpdateOperationsInput;

  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: EnumRoleFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  bio?: NullableStringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => PostUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  posts?: PostUncheckedUpdateManyWithoutUserNestedInput;

  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;

  @Field(() => NotificationUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;

  @Field(() => LikeUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;

  @Field(() => RSVPUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  rsvps?: RSVPUncheckedUpdateManyWithoutUserNestedInput;
}
