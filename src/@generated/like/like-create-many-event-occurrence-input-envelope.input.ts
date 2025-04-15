import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyEventOccurrenceInput } from './like-create-many-event-occurrence.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateManyEventOccurrenceInputEnvelope {
  @Field(() => [LikeCreateManyEventOccurrenceInput], { nullable: false })
  @Type(() => LikeCreateManyEventOccurrenceInput)
  data!: Array<LikeCreateManyEventOccurrenceInput>;
}
