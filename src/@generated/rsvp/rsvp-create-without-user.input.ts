import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedOneWithoutRsvpsInput } from '../event/event-create-nested-one-without-rsvps.input';

@InputType()
export class RSVPCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => EventCreateNestedOneWithoutRsvpsInput, {nullable:false})
    event!: EventCreateNestedOneWithoutRsvpsInput;
}
