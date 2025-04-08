import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutCategoriesInput {
  @Field(() => PostWhereUniqueInput, { nullable: false })
  @Type(() => PostWhereUniqueInput)
  where!: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'eventId'>;

  @Field(() => PostUpdateWithoutCategoriesInput, { nullable: false })
  @Type(() => PostUpdateWithoutCategoriesInput)
  update!: PostUpdateWithoutCategoriesInput;

  @Field(() => PostCreateWithoutCategoriesInput, { nullable: false })
  @Type(() => PostCreateWithoutCategoriesInput)
  create!: PostCreateWithoutCategoriesInput;
}
