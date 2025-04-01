import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutEventInput } from './comment-create-without-event.input';

@InputType()
export class CommentCreateOrConnectWithoutEventInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutEventInput, {nullable:false})
    @Type(() => CommentCreateWithoutEventInput)
    create!: CommentCreateWithoutEventInput;
}
