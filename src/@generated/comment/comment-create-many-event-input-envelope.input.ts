import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyEventInput } from './comment-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyEventInputEnvelope {

    @Field(() => [CommentCreateManyEventInput], {nullable:false})
    @Type(() => CommentCreateManyEventInput)
    data!: Array<CommentCreateManyEventInput>;
}
