import { InputType, Field, Int } from '@nestjs/graphql';
import { CreatePostInput } from 'src/posts/dto/create-post.input';
import { IsInt, Validate, ValidateIf } from 'class-validator';
import { IsPostValidWhenSharing } from '../validators/post-sharing.validator';
import { EventMode, EventStatus, EventType } from 'src/@generated';

@InputType()
export class CreateEventInput {
  @Field(() => String, {
    nullable: false,
    description: 'The title of the event',
  })
  title!: string;

  @Field(() => String, {
    nullable: true,
    description: 'The description of the event',
  })
  description?: string;

  @Field(() => Date, {
    nullable: true,
    description: 'The date and time when the event starts',
  })
  startTime?: Date | string;

  @Field(() => Date, {
    nullable: true,
    description: 'The date and time when the event ends',
  })
  endTime?: Date | string;

  @Field(() => String, {
    nullable: true,
    description: 'The cover image of the event',
  })
  image?: string;

  @Field(() => Boolean, {
    nullable: true,
    description: 'Whether the event is frequently repeated',
  })
  isRecurring?: boolean;

  @Field(() => String, {
    nullable: true,
    description: 'how the event is repeated',
  })
  recurrenceRule?: string;

  @Field(() => Boolean, {
    nullable: true,
    description: 'Whether the event is a public event',
  })
  isPublic?: boolean;

  @Field(() => Boolean, {
    nullable: true,
    description: 'whether to share the event as a post',
  })
  @ValidateIf((o) => o.shareAsPost !== undefined)
  @Validate(IsPostValidWhenSharing, {
    message: 'Event cannot be shared as a post if it is not public',
  })
  shareAsPost?: boolean;

  @Field(() => CreatePostInput, {
    nullable: true,
    description: 'Post details required if sharing as a post',
  })
  @ValidateIf((o) => o.shareAsPost === true)
  @Validate(IsPostValidWhenSharing)
  post?: CreatePostInput;

  @Field(() => EventStatus, {
    nullable: true,
    description: 'The status of the event',
  })
  eventStatus?: `${EventStatus}`;

  @Field(() => EventMode, {
    nullable: true,
    description: 'The mode of the event',
  })
  eventMode?: `${EventMode}`;

  @Field(() => EventType, {
    nullable: true,
    description: 'The type of the event',
  })
  eventType?: `${EventType}`;

  @Field(() => String, {
    nullable: true,
    description: 'The link to the event',
  })
  eventLink?: string;

  @Field(() => [Int], {
    nullable: true,
  })
  @IsInt({ each: true })
  categoryIds?: number[];
}
