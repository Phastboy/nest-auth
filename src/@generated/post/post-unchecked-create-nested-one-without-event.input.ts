import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutEventInput } from './post-create-without-event.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutEventInput } from './post-create-or-connect-without-event.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUncheckedCreateNestedOneWithoutEventInput {
  @Field(() => PostCreateWithoutEventInput, { nullable: true })
  @Type(() => PostCreateWithoutEventInput)
  create?: PostCreateWithoutEventInput;

  @Field(() => PostCreateOrConnectWithoutEventInput, { nullable: true })
  @Type(() => PostCreateOrConnectWithoutEventInput)
  connectOrCreate?: PostCreateOrConnectWithoutEventInput;

  @Field(() => PostWhereUniqueInput, { nullable: true })
  @Type(() => PostWhereUniqueInput)
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'eventId'>;
}
