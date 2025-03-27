import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutRsvpsInput } from './event-create-without-rsvps.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutRsvpsInput } from './event-create-or-connect-without-rsvps.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutRsvpsInput {

    @Field(() => EventCreateWithoutRsvpsInput, {nullable:true})
    @Type(() => EventCreateWithoutRsvpsInput)
    create?: EventCreateWithoutRsvpsInput;

    @Field(() => EventCreateOrConnectWithoutRsvpsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutRsvpsInput)
    connectOrCreate?: EventCreateOrConnectWithoutRsvpsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
