import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RSVPWhereUniqueInput } from '../rsvp/rsvp-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRsvpOrThrowArgs {

    @Field(() => RSVPWhereUniqueInput, {nullable:false})
    @Type(() => RSVPWhereUniqueInput)
    where!: RSVPWhereUniqueInput;
}
