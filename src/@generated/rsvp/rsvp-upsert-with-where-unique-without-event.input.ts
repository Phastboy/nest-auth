import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';
import { Type } from 'class-transformer';
import { RSVPUpdateWithoutEventInput } from './rsvp-update-without-event.input';
import { RSVPCreateWithoutEventInput } from './rsvp-create-without-event.input';

@InputType()
export class RSVPUpsertWithWhereUniqueWithoutEventInput {

    @Field(() => RSVPWhereUniqueInput, {nullable:false})
    @Type(() => RSVPWhereUniqueInput)
    where!: Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>;

    @Field(() => RSVPUpdateWithoutEventInput, {nullable:false})
    @Type(() => RSVPUpdateWithoutEventInput)
    update!: RSVPUpdateWithoutEventInput;

    @Field(() => RSVPCreateWithoutEventInput, {nullable:false})
    @Type(() => RSVPCreateWithoutEventInput)
    create!: RSVPCreateWithoutEventInput;
}
