import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RSVPCountAggregate } from './rsvp-count-aggregate.output';
import { RSVPAvgAggregate } from './rsvp-avg-aggregate.output';
import { RSVPSumAggregate } from './rsvp-sum-aggregate.output';
import { RSVPMinAggregate } from './rsvp-min-aggregate.output';
import { RSVPMaxAggregate } from './rsvp-max-aggregate.output';

@ObjectType()
export class AggregateRSVP {

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
