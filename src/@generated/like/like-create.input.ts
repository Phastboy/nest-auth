import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLikesInput } from '../user/user-create-nested-one-without-likes.input';
import { PostCreateNestedOneWithoutLikesInput } from '../post/post-create-nested-one-without-likes.input';
import { EventCreateNestedOneWithoutLikesInput } from '../event/event-create-nested-one-without-likes.input';

@InputType()
export class LikeCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLikesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLikesInput;

    @Field(() => PostCreateNestedOneWithoutLikesInput, {nullable:true})
    post?: PostCreateNestedOneWithoutLikesInput;

    @Field(() => EventCreateNestedOneWithoutLikesInput, {nullable:true})
    event?: EventCreateNestedOneWithoutLikesInput;
}
