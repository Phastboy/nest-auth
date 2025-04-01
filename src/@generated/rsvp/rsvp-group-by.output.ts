import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RSVPCountAggregate } from './rsvp-count-aggregate.output';
import { RSVPAvgAggregate } from './rsvp-avg-aggregate.output';
import { RSVPSumAggregate } from './rsvp-sum-aggregate.output';
import { RSVPMinAggregate } from './rsvp-min-aggregate.output';
import { RSVPMaxAggregate } from './rsvp-max-aggregate.output';

@ObjectType()
export class RSVPGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => RSVPCountAggregate, {nullable:true})
    _count?: RSVPCountAggregate;

    @Field(() => RSVPAvgAggregate, {nullable:true})
    _avg?: RSVPAvgAggregate;

    @Field(() => RSVPSumAggregate, {nullable:true})
    _sum?: RSVPSumAggregate;

    @Field(() => RSVPMinAggregate, {nullable:true})
    _min?: RSVPMinAggregate;

    @Field(() => RSVPMaxAggregate, {nullable:true})
    _max?: RSVPMaxAggregate;
}
