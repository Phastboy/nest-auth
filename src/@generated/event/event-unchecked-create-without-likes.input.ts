import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventMode } from '../prisma/event-mode.enum';
import { EventType } from '../prisma/event-type.enum';
import { PostUncheckedCreateNestedOneWithoutEventInput } from '../post/post-unchecked-create-nested-one-without-event.input';
import { CategoryUncheckedCreateNestedManyWithoutEventsInput } from '../category/category-unchecked-create-nested-many-without-events.input';
import { CommentUncheckedCreateNestedManyWithoutEventInput } from '../comment/comment-unchecked-create-nested-many-without-event.input';
import { RSVPUncheckedCreateNestedManyWithoutEventInput } from '../rsvp/rsvp-unchecked-create-nested-many-without-event.input';
import { EventOccurrenceUncheckedCreateNestedManyWithoutEventInput } from '../event-occurrence/event-occurrence-unchecked-create-nested-many-without-event.input';

@InputType()
export class EventUncheckedCreateWithoutLikesInput {
  @Field(() => Int, { nullable: true })
  id?: number;

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

  @Field(() => Int, { nullable: false })
  userId!: number;

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

  @Field(() => PostUncheckedCreateNestedOneWithoutEventInput, {
    nullable: true,
  })
  post?: PostUncheckedCreateNestedOneWithoutEventInput;

  @Field(() => CategoryUncheckedCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  categories?: CategoryUncheckedCreateNestedManyWithoutEventsInput;

  @Field(() => CommentUncheckedCreateNestedManyWithoutEventInput, {
    nullable: true,
  })
  comments?: CommentUncheckedCreateNestedManyWithoutEventInput;

  @Field(() => RSVPUncheckedCreateNestedManyWithoutEventInput, {
    nullable: true,
  })
  rsvps?: RSVPUncheckedCreateNestedManyWithoutEventInput;

  @Field(() => EventOccurrenceUncheckedCreateNestedManyWithoutEventInput, {
    nullable: true,
  })
  occurrences?: EventOccurrenceUncheckedCreateNestedManyWithoutEventInput;
}
