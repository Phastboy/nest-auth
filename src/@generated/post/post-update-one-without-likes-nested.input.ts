import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutLikesInput } from './post-create-without-likes.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutLikesInput } from './post-create-or-connect-without-likes.input';
import { PostUpsertWithoutLikesInput } from './post-upsert-without-likes.input';
import { PostWhereInput } from './post-where.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutLikesInput } from './post-update-to-one-with-where-without-likes.input';

@InputType()
export class PostUpdateOneWithoutLikesNestedInput {
  @Field(() => PostCreateWithoutLikesInput, { nullable: true })
  @Type(() => PostCreateWithoutLikesInput)
  create?: PostCreateWithoutLikesInput;

  @Field(() => PostCreateOrConnectWithoutLikesInput, { nullable: true })
  @Type(() => PostCreateOrConnectWithoutLikesInput)
  connectOrCreate?: PostCreateOrConnectWithoutLikesInput;

  @Field(() => PostUpsertWithoutLikesInput, { nullable: true })
  @Type(() => PostUpsertWithoutLikesInput)
  upsert?: PostUpsertWithoutLikesInput;

  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  disconnect?: PostWhereInput;

  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  delete?: PostWhereInput;

  @Field(() => PostWhereUniqueInput, { nullable: true })
  @Type(() => PostWhereUniqueInput)
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'eventId'>;

  @Field(() => PostUpdateToOneWithWhereWithoutLikesInput, { nullable: true })
  @Type(() => PostUpdateToOneWithWhereWithoutLikesInput)
  update?: PostUpdateToOneWithWhereWithoutLikesInput;
}
