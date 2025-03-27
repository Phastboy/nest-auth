import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RSVPCreateManyInput } from '../rsvp/rsvp-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRsvpArgs {

    @Field(() => [RSVPCreateManyInput], {nullable:false})
    @Type(() => RSVPCreateManyInput)
    data!: Array<RSVPCreateManyInput>;
}
