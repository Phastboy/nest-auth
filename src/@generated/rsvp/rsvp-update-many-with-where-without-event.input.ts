import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPScalarWhereInput } from './rsvp-scalar-where.input';
import { Type } from 'class-transformer';
import { RSVPUpdateManyMutationInput } from './rsvp-update-many-mutation.input';

@InputType()
export class RSVPUpdateManyWithWhereWithoutEventInput {

    @Field(() => RSVPScalarWhereInput, {nullable:false})
    @Type(() => RSVPScalarWhereInput)
    where!: RSVPScalarWhereInput;

    @Field(() => RSVPUpdateManyMutationInput, {nullable:false})
    @Type(() => RSVPUpdateManyMutationInput)
    data!: RSVPUpdateManyMutationInput;
}
