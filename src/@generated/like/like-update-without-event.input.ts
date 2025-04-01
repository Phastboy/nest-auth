import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutLikesNestedInput } from '../user/user-update-one-required-without-likes-nested.input';
import { PostUpdateOneWithoutLikesNestedInput } from '../post/post-update-one-without-likes-nested.input';

@InputType()
export class LikeUpdateWithoutEventInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutLikesNestedInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutLikesNestedInput;

  @Field(() => PostUpdateOneWithoutLikesNestedInput, { nullable: true })
  post?: PostUpdateOneWithoutLikesNestedInput;
}
