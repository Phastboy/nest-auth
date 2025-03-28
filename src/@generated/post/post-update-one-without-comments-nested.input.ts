import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutCommentsInput } from './post-create-or-connect-without-comments.input';
import { PostUpsertWithoutCommentsInput } from './post-upsert-without-comments.input';
import { PostWhereInput } from './post-where.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutCommentsInput } from './post-update-to-one-with-where-without-comments.input';

@InputType()
export class PostUpdateOneWithoutCommentsNestedInput {
  @Field(() => PostCreateWithoutCommentsInput, { nullable: true })
  @Type(() => PostCreateWithoutCommentsInput)
  create?: PostCreateWithoutCommentsInput;

  @Field(() => PostCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => PostCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;

  @Field(() => PostUpsertWithoutCommentsInput, { nullable: true })
  @Type(() => PostUpsertWithoutCommentsInput)
  upsert?: PostUpsertWithoutCommentsInput;

  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  disconnect?: PostWhereInput;

  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  delete?: PostWhereInput;

  @Field(() => PostWhereUniqueInput, { nullable: true })
  @Type(() => PostWhereUniqueInput)
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'eventId'>;

  @Field(() => PostUpdateToOneWithWhereWithoutCommentsInput, { nullable: true })
  @Type(() => PostUpdateToOneWithWhereWithoutCommentsInput)
  update?: PostUpdateToOneWithWhereWithoutCommentsInput;
}
