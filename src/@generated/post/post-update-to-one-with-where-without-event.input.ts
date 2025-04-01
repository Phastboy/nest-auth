import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutEventInput } from './post-update-without-event.input';

@InputType()
export class PostUpdateToOneWithWhereWithoutEventInput {
  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  where?: PostWhereInput;

  @Field(() => PostUpdateWithoutEventInput, { nullable: false })
  @Type(() => PostUpdateWithoutEventInput)
  data!: PostUpdateWithoutEventInput;
}
