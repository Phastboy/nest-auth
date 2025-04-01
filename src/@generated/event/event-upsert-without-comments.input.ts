import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutCommentsInput } from './event-update-without-comments.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutCommentsInput } from './event-create-without-comments.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutCommentsInput {

    @Field(() => EventUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => EventUpdateWithoutCommentsInput)
    update!: EventUpdateWithoutCommentsInput;

    @Field(() => EventCreateWithoutCommentsInput, {nullable:false})
    @Type(() => EventCreateWithoutCommentsInput)
    create!: EventCreateWithoutCommentsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
