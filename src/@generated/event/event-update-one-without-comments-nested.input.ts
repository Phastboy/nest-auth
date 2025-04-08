import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCommentsInput } from './event-create-without-comments.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCommentsInput } from './event-create-or-connect-without-comments.input';
import { EventUpsertWithoutCommentsInput } from './event-upsert-without-comments.input';
import { EventWhereInput } from './event-where.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutCommentsInput } from './event-update-to-one-with-where-without-comments.input';

@InputType()
export class EventUpdateOneWithoutCommentsNestedInput {

    @Field(() => EventCreateWithoutCommentsInput, {nullable:true})
    @Type(() => EventCreateWithoutCommentsInput)
    create?: EventCreateWithoutCommentsInput;

    @Field(() => EventCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: EventCreateOrConnectWithoutCommentsInput;

    @Field(() => EventUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => EventUpsertWithoutCommentsInput)
    upsert?: EventUpsertWithoutCommentsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    disconnect?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    delete?: EventWhereInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutCommentsInput)
    update?: EventUpdateToOneWithWhereWithoutCommentsInput;
}
