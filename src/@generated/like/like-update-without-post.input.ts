import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutLikesNestedInput } from '../user/user-update-one-required-without-likes-nested.input';
import { EventUpdateOneWithoutLikesNestedInput } from '../event/event-update-one-without-likes-nested.input';

@InputType()
export class LikeUpdateWithoutPostInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLikesNestedInput;

    @Field(() => EventUpdateOneWithoutLikesNestedInput, {nullable:true})
    event?: EventUpdateOneWithoutLikesNestedInput;
}
