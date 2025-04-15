import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMode } from '../prisma/event-mode.enum';
import { EventType } from '../prisma/event-type.enum';
import { UserCreateNestedOneWithoutEventsInput } from '../user/user-create-nested-one-without-events.input';
import { PostCreateNestedOneWithoutEventInput } from '../post/post-create-nested-one-without-event.input';
import { CategoryCreateNestedManyWithoutEventsInput } from '../category/category-create-nested-many-without-events.input';
import { CommentCreateNestedManyWithoutEventInput } from '../comment/comment-create-nested-many-without-event.input';
import { RSVPCreateNestedManyWithoutEventInput } from '../rsvp/rsvp-create-nested-many-without-event.input';
import { LikeCreateNestedManyWithoutEventInput } from '../like/like-create-nested-many-without-event.input';
import { EventOccurrenceCreateNestedManyWithoutEventInput } from '../event-occurrence/event-occurrence-create-nested-many-without-event.input';

@InputType()
export class EventCreateInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Boolean, { nullable: true })
  isRecurring?: boolean;

  @Field(() => String, { nullable: true })
  recurrenceRule?: string;

  @Field(() => Boolean, { nullable: true })
  isPublic?: boolean;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => Boolean, { nullable: true })
  shareAsPost?: boolean;

  @Field(() => EventMode, { nullable: true })
  eventMode?: `${EventMode}`;

  @Field(() => EventType, { nullable: true })
  eventType?: `${EventType}`;

  @Field(() => String, { nullable: true })
  eventLink?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutEventsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutEventsInput;

  @Field(() => PostCreateNestedOneWithoutEventInput, { nullable: true })
  post?: PostCreateNestedOneWithoutEventInput;

  @Field(() => CategoryCreateNestedManyWithoutEventsInput, { nullable: true })
  categories?: CategoryCreateNestedManyWithoutEventsInput;

  @Field(() => CommentCreateNestedManyWithoutEventInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutEventInput;

  @Field(() => RSVPCreateNestedManyWithoutEventInput, { nullable: true })
  rsvps?: RSVPCreateNestedManyWithoutEventInput;

  @Field(() => LikeCreateNestedManyWithoutEventInput, { nullable: true })
  likes?: LikeCreateNestedManyWithoutEventInput;

  @Field(() => EventOccurrenceCreateNestedManyWithoutEventInput, {
    nullable: true,
  })
  occurrences?: EventOccurrenceCreateNestedManyWithoutEventInput;
}
