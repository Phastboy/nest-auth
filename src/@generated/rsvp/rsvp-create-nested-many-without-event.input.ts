import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPCreateWithoutEventInput } from './rsvp-create-without-event.input';
import { Type } from 'class-transformer';
import { RSVPCreateOrConnectWithoutEventInput } from './rsvp-create-or-connect-without-event.input';
import { RSVPCreateManyEventInputEnvelope } from './rsvp-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';

@InputType()
export class RSVPCreateNestedManyWithoutEventInput {

    @Field(() => [RSVPCreateWithoutEventInput], {nullable:true})
    @Type(() => RSVPCreateWithoutEventInput)
    create?: Array<RSVPCreateWithoutEventInput>;

    @Field(() => [RSVPCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => RSVPCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<RSVPCreateOrConnectWithoutEventInput>;

    @Field(() => RSVPCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => RSVPCreateManyEventInputEnvelope)
    createMany?: RSVPCreateManyEventInputEnvelope;

    @Field(() => [RSVPWhereUniqueInput], {nullable:true})
    @Type(() => RSVPWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>>;
}
