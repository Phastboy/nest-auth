import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EventIncludeInput {
  @Field(() => Boolean, { nullable: true })
  categories?: boolean;

  @Field(() => Boolean, { nullable: true })
  post?: boolean;

  @Field(() => Boolean, { nullable: true })
  _count?: boolean;
}
