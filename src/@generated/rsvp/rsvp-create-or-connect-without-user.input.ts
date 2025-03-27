import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';
import { Type } from 'class-transformer';
import { RSVPCreateWithoutUserInput } from './rsvp-create-without-user.input';

@InputType()
export class RSVPCreateOrConnectWithoutUserInput {

    @Field(() => RSVPWhereUniqueInput, {nullable:false})
    @Type(() => RSVPWhereUniqueInput)
    where!: Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>;

    @Field(() => RSVPCreateWithoutUserInput, {nullable:false})
    @Type(() => RSVPCreateWithoutUserInput)
    create!: RSVPCreateWithoutUserInput;
}
