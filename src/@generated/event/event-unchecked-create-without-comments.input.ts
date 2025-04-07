import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';
import { EventType } from '../prisma/event-type.enum';
import { PostUncheckedCreateNestedOneWithoutEventInput } from '../post/post-unchecked-create-nested-one-without-event.input';
import { CategoryUncheckedCreateNestedManyWithoutEventsInput } from '../category/category-unchecked-create-nested-many-without-events.input';
import { RSVPUncheckedCreateNestedManyWithoutEventInput } from '../rsvp/rsvp-unchecked-create-nested-many-without-event.input';
import { LikeUncheckedCreateNestedManyWithoutEventInput } from '../like/like-unchecked-create-nested-many-without-event.input';

@InputType()
export class EventUncheckedCreateWithoutCommentsInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  location!: string;

  @Field(() => Date, { nullable: true })
  startTime?: Date | string;

  @Field(() => Date, { nullable: true })
  endTime?: Date | string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Boolean, { nullable: true })
  isRecurring?: boolean;

  @Field(() => String, { nullable: true })
  recurrenceRule?: string;

  @Field(() => Boolean, { nullable: true })
  isPublic?: boolean;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Boolean, { nullable: true })
  shareAsPost?: boolean;

  @Field(() => EventStatus, { nullable: true })
  status?: `${EventStatus}`;

  @Field(() => EventMode, { nullable: true })
  eventMode?: `${EventMode}`;

  @Field(() => EventType, { nullable: true })
  eventType?: `${EventType}`;

  @Field(() => String, { nullable: true })
  eventLink?: string;

  @Field(() => Int, { nullable: true })
  roomId?: number;

  @Field(() => Int, { nullable: true })
  buildingId?: number;

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

  @Field(() => RSVPUncheckedCreateNestedManyWithoutEventInput, {
    nullable: true,
  })
  rsvps?: RSVPUncheckedCreateNestedManyWithoutEventInput;

  @Field(() => LikeUncheckedCreateNestedManyWithoutEventInput, {
    nullable: true,
  })
  likes?: LikeUncheckedCreateNestedManyWithoutEventInput;
}
