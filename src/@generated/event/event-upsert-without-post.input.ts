import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutPostInput } from './event-update-without-post.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutPostInput } from './event-create-without-post.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutPostInput {

    @Field(() => EventUpdateWithoutPostInput, {nullable:false})
    @Type(() => EventUpdateWithoutPostInput)
    update!: EventUpdateWithoutPostInput;

    @Field(() => EventCreateWithoutPostInput, {nullable:false})
    @Type(() => EventCreateWithoutPostInput)
    create!: EventCreateWithoutPostInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
