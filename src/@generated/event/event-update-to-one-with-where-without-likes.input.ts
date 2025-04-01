import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutLikesInput } from './event-update-without-likes.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutLikesInput {
  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  where?: EventWhereInput;

  @Field(() => EventUpdateWithoutLikesInput, { nullable: false })
  @Type(() => EventUpdateWithoutLikesInput)
  data!: EventUpdateWithoutLikesInput;
}
