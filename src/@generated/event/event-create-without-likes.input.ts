import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';
import { EventType } from '../prisma/event-type.enum';
import { UserCreateNestedOneWithoutEventsInput } from '../user/user-create-nested-one-without-events.input';
import { PostCreateNestedOneWithoutEventInput } from '../post/post-create-nested-one-without-event.input';
import { CategoryCreateNestedManyWithoutEventsInput } from '../category/category-create-nested-many-without-events.input';
import { RoomCreateNestedOneWithoutEventsInput } from '../room/room-create-nested-one-without-events.input';
import { BuildingCreateNestedOneWithoutEventsInput } from '../building/building-create-nested-one-without-events.input';
import { CommentCreateNestedManyWithoutEventInput } from '../comment/comment-create-nested-many-without-event.input';
import { RSVPCreateNestedManyWithoutEventInput } from '../rsvp/rsvp-create-nested-many-without-event.input';

@InputType()
export class EventCreateWithoutLikesInput {
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

  @Field(() => RoomCreateNestedOneWithoutEventsInput, { nullable: true })
  room?: RoomCreateNestedOneWithoutEventsInput;

  @Field(() => BuildingCreateNestedOneWithoutEventsInput, { nullable: true })
  building?: BuildingCreateNestedOneWithoutEventsInput;

  @Field(() => CommentCreateNestedManyWithoutEventInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutEventInput;

  @Field(() => RSVPCreateNestedManyWithoutEventInput, { nullable: true })
  rsvps?: RSVPCreateNestedManyWithoutEventInput;
}
