import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPCreateWithoutUserInput } from './rsvp-create-without-user.input';
import { Type } from 'class-transformer';
import { RSVPCreateOrConnectWithoutUserInput } from './rsvp-create-or-connect-without-user.input';
import { RSVPCreateManyUserInputEnvelope } from './rsvp-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';

@InputType()
export class RSVPUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [RSVPCreateWithoutUserInput], {nullable:true})
    @Type(() => RSVPCreateWithoutUserInput)
    create?: Array<RSVPCreateWithoutUserInput>;

    @Field(() => [RSVPCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RSVPCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RSVPCreateOrConnectWithoutUserInput>;

    @Field(() => RSVPCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RSVPCreateManyUserInputEnvelope)
    createMany?: RSVPCreateManyUserInputEnvelope;

    @Field(() => [RSVPWhereUniqueInput], {nullable:true})
    @Type(() => RSVPWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>>;
}
