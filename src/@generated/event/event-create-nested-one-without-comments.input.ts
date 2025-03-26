import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCommentsInput } from './event-create-without-comments.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCommentsInput } from './event-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutCommentsInput {
  @Field(() => EventCreateWithoutCommentsInput, { nullable: true })
  @Type(() => EventCreateWithoutCommentsInput)
  create?: EventCreateWithoutCommentsInput;

  @Field(() => EventCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => EventCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: EventCreateOrConnectWithoutCommentsInput;

  @Field(() => EventWhereUniqueInput, { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'postId'>;
}
