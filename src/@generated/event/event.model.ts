import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';
import { EventType } from '../prisma/event-type.enum';
import { User } from '../user/user.model';
import { Post } from '../post/post.model';
import { Category } from '../category/category.model';
import { Room } from '../room/room.model';
import { Building } from '../building/building.model';
import { Comment } from '../comment/comment.model';
import { RSVP } from '../rsvp/rsvp.model';
import { Like } from '../like/like.model';
import { EventCount } from './event-count.output';

@ObjectType()
export class Event {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:true})
    startTime!: Date | null;

    @Field(() => Date, {nullable:true})
    endTime!: Date | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isRecurring!: boolean;

    @Field(() => String, {nullable:true})
    recurrenceRule!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    isPublic!: boolean;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    shareAsPost!: boolean;

    @Field(() => EventStatus, {defaultValue:'SCHEDULED',nullable:false})
    eventStatus!: `${EventStatus}`;

    @Field(() => EventMode, {defaultValue:'PHYSICAL',nullable:false})
    eventMode!: `${EventMode}`;

    @Field(() => EventType, {defaultValue:'LECTURE',nullable:false})
    eventType!: `${EventType}`;

    @Field(() => String, {nullable:true})
    eventLink!: string | null;

    @Field(() => Int, {nullable:true})
    roomId!: number | null;

    @Field(() => Int, {nullable:true})
    buildingId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Post, {nullable:true})
    post?: Post | null;

    @Field(() => [Category], {nullable:true})
    categories?: Array<Category>;

    @Field(() => Room, {nullable:true})
    room?: Room | null;

    @Field(() => Building, {nullable:true})
    building?: Building | null;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [RSVP], {nullable:true})
    rsvps?: Array<RSVP>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => EventCount, {nullable:false})
    _count?: EventCount;
}
