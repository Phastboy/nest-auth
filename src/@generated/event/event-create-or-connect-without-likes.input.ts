import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutLikesInput } from './event-create-without-likes.input';

@InputType()
export class EventCreateOrConnectWithoutLikesInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutLikesInput, {nullable:false})
    @Type(() => EventCreateWithoutLikesInput)
    create!: EventCreateWithoutLikesInput;
}
