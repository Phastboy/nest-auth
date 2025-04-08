import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LikeCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    postId?: number;

    @Field(() => Int, {nullable:true})
    eventId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
