import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EventUpdateOneWithoutPostNestedInput } from '../event/event-update-one-without-post-nested.input';
import { CategoryUpdateManyWithoutPostsNestedInput } from '../category/category-update-many-without-posts-nested.input';
import { CommentUpdateManyWithoutPostNestedInput } from '../comment/comment-update-many-without-post-nested.input';
import { LikeUpdateManyWithoutPostNestedInput } from '../like/like-update-many-without-post-nested.input';

@InputType()
export class PostUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isEvent?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EventUpdateOneWithoutPostNestedInput, {nullable:true})
    event?: EventUpdateOneWithoutPostNestedInput;

    @Field(() => CategoryUpdateManyWithoutPostsNestedInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutPostsNestedInput;

    @Field(() => CommentUpdateManyWithoutPostNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutPostNestedInput;

    @Field(() => LikeUpdateManyWithoutPostNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutPostNestedInput;
}
