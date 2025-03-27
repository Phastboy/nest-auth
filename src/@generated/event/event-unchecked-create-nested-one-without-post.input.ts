import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutPostInput } from './event-create-without-post.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutPostInput } from './event-create-or-connect-without-post.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventUncheckedCreateNestedOneWithoutPostInput {

    @Field(() => EventCreateWithoutPostInput, {nullable:true})
    @Type(() => EventCreateWithoutPostInput)
    create?: EventCreateWithoutPostInput;

    @Field(() => EventCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutPostInput)
    connectOrCreate?: EventCreateOrConnectWithoutPostInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'postId'>;
}
