import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutCommentsInput } from './event-update-without-comments.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => EventUpdateWithoutCommentsInput)
    data!: EventUpdateWithoutCommentsInput;
}
