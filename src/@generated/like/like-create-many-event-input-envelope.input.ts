import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyEventInput } from './like-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateManyEventInputEnvelope {

    @Field(() => [LikeCreateManyEventInput], {nullable:false})
    @Type(() => LikeCreateManyEventInput)
    data!: Array<LikeCreateManyEventInput>;
}
