import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMode } from './event-mode.enum';

@InputType()
export class EnumEventModeFieldUpdateOperationsInput {
  @Field(() => EventMode, { nullable: true })
  set?: `${EventMode}`;
}
