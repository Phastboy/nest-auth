import { InputType, Field, Int } from '@nestjs/graphql';
import { CreatePostInput } from 'src/posts/dto/create-post.input';
import { IsInt, Validate, ValidateIf } from 'class-validator';
import { IsPostValidWhenSharing } from '../validators/post-sharing.validator';
import { EventStatus } from 'src/@generated';

@InputType()
export class CreateEventInput {
  @Field(() => String, {
    nullable: false,
    description: 'Event title',
  })
  title!: string;

  @Field(() => String, {
    nullable: false,
    description: 'Event description',
  })
  description!: string;

  @Field(() => String, {
    nullable: false,
    description: 'Event location',
  })
  location!: string;

  @Field(() => Date, {
    nullable: false,
    description: 'Event start time',
  })
  startTime!: Date | string;

  @Field(() => Date, {
    nullable: true,
    description: 'Event end time',
  })
  endTime?: Date | string;

  @Field(() => String, {
    nullable: true,
    description: 'Event image URL',
  })
  image?: string;

  @Field(() => Boolean, {
    nullable: true,
    description:
      'Whether to share this event as a post. Required if post is provided.',
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

  @Field(() => Boolean, {
    nullable: false,
    description: 'is it a recurring event',
    defaultValue: false,
  })
  isRecurring?: boolean;

  @Field(() => String, { nullable: true })
  recurrenceRule?: string;

  @Field(() => Boolean, {
    nullable: true,
    description: 'is it a public event',
    defaultValue: true,
  })
  isPublic?: boolean;

  @Field(() => EventStatus, {
    nullable: true,
    description: 'status of the event',
    defaultValue: `${EventStatus.SCHEDULED}`,
  })
  status?: `${EventStatus}`;

  @Field(() => [Int], { nullable: true })
  @IsInt({ each: true })
  categoryIds?: number[];
}
