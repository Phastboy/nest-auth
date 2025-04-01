import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutRsvpsInput } from './event-update-without-rsvps.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutRsvpsInput } from './event-create-without-rsvps.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutRsvpsInput {

    @Field(() => EventUpdateWithoutRsvpsInput, {nullable:false})
    @Type(() => EventUpdateWithoutRsvpsInput)
    update!: EventUpdateWithoutRsvpsInput;

    @Field(() => EventCreateWithoutRsvpsInput, {nullable:false})
    @Type(() => EventCreateWithoutRsvpsInput)
    create!: EventCreateWithoutRsvpsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
