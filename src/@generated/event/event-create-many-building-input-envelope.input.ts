import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyBuildingInput } from './event-create-many-building.input';
import { Type } from 'class-transformer';

@InputType()
export class EventCreateManyBuildingInputEnvelope {

    @Field(() => [EventCreateManyBuildingInput], {nullable:false})
    @Type(() => EventCreateManyBuildingInput)
    data!: Array<EventCreateManyBuildingInput>;
}
