import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutLikesInput } from './event-update-without-likes.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutLikesInput } from './event-create-without-likes.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutLikesInput {

    @Field(() => EventUpdateWithoutLikesInput, {nullable:false})
    @Type(() => EventUpdateWithoutLikesInput)
    update!: EventUpdateWithoutLikesInput;

    @Field(() => EventCreateWithoutLikesInput, {nullable:false})
    @Type(() => EventCreateWithoutLikesInput)
    create!: EventCreateWithoutLikesInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
