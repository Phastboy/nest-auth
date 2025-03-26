import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutUserInput } from './event-create-without-user.input';

@InputType()
export class EventCreateOrConnectWithoutUserInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'postId'>;

  @Field(() => EventCreateWithoutUserInput, { nullable: false })
  @Type(() => EventCreateWithoutUserInput)
  create!: EventCreateWithoutUserInput;
}
