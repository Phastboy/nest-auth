import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutCommentsInput } from './event-create-without-comments.input';

@InputType()
export class EventCreateOrConnectWithoutCommentsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutCommentsInput, {nullable:false})
    @Type(() => EventCreateWithoutCommentsInput)
    create!: EventCreateWithoutCommentsInput;
}
