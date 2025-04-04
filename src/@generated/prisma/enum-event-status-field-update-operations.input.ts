import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventStatus } from './event-status.enum';

@InputType()
export class EnumEventStatusFieldUpdateOperationsInput {
  @Field(() => EventStatus, { nullable: true })
  set?: `${EventStatus}`;
}
