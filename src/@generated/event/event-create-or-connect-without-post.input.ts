import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutPostInput } from './event-create-without-post.input';

@InputType()
export class EventCreateOrConnectWithoutPostInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutPostInput, {nullable:false})
    @Type(() => EventCreateWithoutPostInput)
    create!: EventCreateWithoutPostInput;
}
