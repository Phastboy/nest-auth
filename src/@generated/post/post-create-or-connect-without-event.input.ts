import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutEventInput } from './post-create-without-event.input';

@InputType()
export class PostCreateOrConnectWithoutEventInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'eventId'>;

    @Field(() => PostCreateWithoutEventInput, {nullable:false})
    @Type(() => PostCreateWithoutEventInput)
    create!: PostCreateWithoutEventInput;
}
