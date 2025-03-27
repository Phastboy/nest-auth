import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RSVPUpdateInput } from '../rsvp/rsvp-update.input';
import { Type } from 'class-transformer';
import { RSVPWhereUniqueInput } from '../rsvp/rsvp-where-unique.input';

@ArgsType()
export class UpdateOneRsvpArgs {

    @Field(() => RSVPUpdateInput, {nullable:false})
    @Type(() => RSVPUpdateInput)
    data!: RSVPUpdateInput;

    @Field(() => RSVPWhereUniqueInput, {nullable:false})
    @Type(() => RSVPWhereUniqueInput)
    where!: RSVPWhereUniqueInput;
}
