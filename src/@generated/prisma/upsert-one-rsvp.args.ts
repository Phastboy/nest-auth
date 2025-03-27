import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RSVPWhereUniqueInput } from '../rsvp/rsvp-where-unique.input';
import { Type } from 'class-transformer';
import { RSVPCreateInput } from '../rsvp/rsvp-create.input';
import { RSVPUpdateInput } from '../rsvp/rsvp-update.input';

@ArgsType()
export class UpsertOneRsvpArgs {

    @Field(() => RSVPWhereUniqueInput, {nullable:false})
    @Type(() => RSVPWhereUniqueInput)
    where!: RSVPWhereUniqueInput;

    @Field(() => RSVPCreateInput, {nullable:false})
    @Type(() => RSVPCreateInput)
    create!: RSVPCreateInput;

    @Field(() => RSVPUpdateInput, {nullable:false})
    @Type(() => RSVPUpdateInput)
    update!: RSVPUpdateInput;
}
