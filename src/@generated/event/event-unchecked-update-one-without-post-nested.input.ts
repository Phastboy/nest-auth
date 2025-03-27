import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutPostInput } from './event-create-without-post.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutPostInput } from './event-create-or-connect-without-post.input';
import { EventUpsertWithoutPostInput } from './event-upsert-without-post.input';
import { EventWhereInput } from './event-where.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutPostInput } from './event-update-to-one-with-where-without-post.input';

@InputType()
export class EventUncheckedUpdateOneWithoutPostNestedInput {

    @Field(() => EventCreateWithoutPostInput, {nullable:true})
    @Type(() => EventCreateWithoutPostInput)
    create?: EventCreateWithoutPostInput;

    @Field(() => EventCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutPostInput)
    connectOrCreate?: EventCreateOrConnectWithoutPostInput;

    @Field(() => EventUpsertWithoutPostInput, {nullable:true})
    @Type(() => EventUpsertWithoutPostInput)
    upsert?: EventUpsertWithoutPostInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    disconnect?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    delete?: EventWhereInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'postId'>;

    @Field(() => EventUpdateToOneWithWhereWithoutPostInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutPostInput)
    update?: EventUpdateToOneWithWhereWithoutPostInput;
}
