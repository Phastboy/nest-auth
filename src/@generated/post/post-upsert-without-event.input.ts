import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutEventInput } from './post-update-without-event.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutEventInput } from './post-create-without-event.input';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostUpsertWithoutEventInput {
  @Field(() => PostUpdateWithoutEventInput, { nullable: false })
  @Type(() => PostUpdateWithoutEventInput)
  update!: PostUpdateWithoutEventInput;

  @Field(() => PostCreateWithoutEventInput, { nullable: false })
  @Type(() => PostCreateWithoutEventInput)
  create!: PostCreateWithoutEventInput;

  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  where?: PostWhereInput;
}
