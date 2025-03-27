import { InputType, Field } from '@nestjs/graphql';
import { CreatePostInput } from 'src/posts/dto/create-post.input';
import { Validate, ValidateIf } from 'class-validator';
import { IsPostValidWhenSharing } from '../validators/post-sharing.validator';

@InputType()
export class CreateEventInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  location!: string;

  @Field(() => Date, { nullable: false })
  startTime!: Date | string;

  @Field(() => Date, { nullable: true })
  endTime?: Date | string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Boolean, {
    nullable: true,
    description:
      'Whether to share this event as a post. Required if post is provided.',
    defaultValue: false,
  })
  @ValidateIf((o) => o.post !== undefined)
  shareAsPost?: boolean;

  @Field(() => CreatePostInput, {
    nullable: true,
    description: 'Post details required if sharing as a post',
  })
  @ValidateIf((o) => o.shareAsPost === true)
  @Validate(IsPostValidWhenSharing)
  post?: CreatePostInput;
}
