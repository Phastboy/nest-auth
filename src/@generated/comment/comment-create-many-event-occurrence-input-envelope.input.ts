import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyEventOccurrenceInput } from './comment-create-many-event-occurrence.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyEventOccurrenceInputEnvelope {
  @Field(() => [CommentCreateManyEventOccurrenceInput], { nullable: false })
  @Type(() => CommentCreateManyEventOccurrenceInput)
  data!: Array<CommentCreateManyEventOccurrenceInput>;
}
