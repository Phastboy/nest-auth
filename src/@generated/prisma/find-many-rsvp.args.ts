import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RSVPWhereInput } from '../rsvp/rsvp-where.input';
import { Type } from 'class-transformer';
import { RSVPOrderByWithRelationInput } from '../rsvp/rsvp-order-by-with-relation.input';
import { RSVPWhereUniqueInput } from '../rsvp/rsvp-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RSVPScalarFieldEnum } from '../rsvp/rsvp-scalar-field.enum';

@ArgsType()
export class FindManyRsvpArgs {

    @Field(() => RSVPWhereInput, {nullable:true})
    @Type(() => RSVPWhereInput)
    where?: RSVPWhereInput;

    @Field(() => [RSVPOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RSVPOrderByWithRelationInput>;

    @Field(() => RSVPWhereUniqueInput, {nullable:true})
    cursor?: RSVPWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RSVPScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RSVPScalarFieldEnum}`>;
}
