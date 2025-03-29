import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Event } from '../event/event.model';

@ObjectType()
export class RSVP {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Int, { nullable: false })
  eventId!: number;

  @Field(() => String, { defaultValue: 'going', nullable: false })
  status!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => Event, { nullable: false })
  event?: Event;
}
