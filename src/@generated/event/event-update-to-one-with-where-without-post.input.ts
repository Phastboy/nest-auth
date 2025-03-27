import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutPostInput } from './event-update-without-post.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutPostInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutPostInput, {nullable:false})
    @Type(() => EventUpdateWithoutPostInput)
    data!: EventUpdateWithoutPostInput;
}
