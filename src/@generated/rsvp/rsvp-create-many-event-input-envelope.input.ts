import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPCreateManyEventInput } from './rsvp-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class RSVPCreateManyEventInputEnvelope {

    @Field(() => [RSVPCreateManyEventInput], {nullable:false})
    @Type(() => RSVPCreateManyEventInput)
    data!: Array<RSVPCreateManyEventInput>;
}
