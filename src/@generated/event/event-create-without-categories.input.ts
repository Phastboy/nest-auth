import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutEventsInput } from '../user/user-create-nested-one-without-events.input';
import { PostCreateNestedOneWithoutEventInput } from '../post/post-create-nested-one-without-event.input';
import { CommentCreateNestedManyWithoutEventInput } from '../comment/comment-create-nested-many-without-event.input';
import { RSVPCreateNestedManyWithoutEventInput } from '../rsvp/rsvp-create-nested-many-without-event.input';
import { LikeCreateNestedManyWithoutEventInput } from '../like/like-create-nested-many-without-event.input';

@InputType()
export class EventCreateWithoutCategoriesInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Boolean, {nullable:true})
    shareAsPost?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutEventsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutEventsInput;

    @Field(() => PostCreateNestedOneWithoutEventInput, {nullable:true})
    post?: PostCreateNestedOneWithoutEventInput;

    @Field(() => CommentCreateNestedManyWithoutEventInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutEventInput;

    @Field(() => RSVPCreateNestedManyWithoutEventInput, {nullable:true})
    rsvps?: RSVPCreateNestedManyWithoutEventInput;

    @Field(() => LikeCreateNestedManyWithoutEventInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutEventInput;
}
