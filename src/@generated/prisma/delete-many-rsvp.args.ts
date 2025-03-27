import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RSVPWhereInput } from '../rsvp/rsvp-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRsvpArgs {

    @Field(() => RSVPWhereInput, {nullable:true})
    @Type(() => RSVPWhereInput)
    where?: RSVPWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
