import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostUncheckedCreateNestedOneWithoutEventInput } from '../post/post-unchecked-create-nested-one-without-event.input';
import { CategoryUncheckedCreateNestedManyWithoutEventsInput } from '../category/category-unchecked-create-nested-many-without-events.input';
import { CommentUncheckedCreateNestedManyWithoutEventInput } from '../comment/comment-unchecked-create-nested-many-without-event.input';
import { RSVPUncheckedCreateNestedManyWithoutEventInput } from '../rsvp/rsvp-unchecked-create-nested-many-without-event.input';

@InputType()
export class EventUncheckedCreateWithoutLikesInput {
  @Field(() => Int, { nullable: true })
  id?: number;

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

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Boolean, { nullable: true })
  shareAsPost?: boolean;

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
}
