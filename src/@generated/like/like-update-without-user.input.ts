import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUpdateOneWithoutLikesNestedInput } from '../post/post-update-one-without-likes-nested.input';
import { EventUpdateOneWithoutLikesNestedInput } from '../event/event-update-one-without-likes-nested.input';

@InputType()
export class LikeUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PostUpdateOneWithoutLikesNestedInput, {nullable:true})
    post?: PostUpdateOneWithoutLikesNestedInput;

    @Field(() => EventUpdateOneWithoutLikesNestedInput, {nullable:true})
    event?: EventUpdateOneWithoutLikesNestedInput;
}
