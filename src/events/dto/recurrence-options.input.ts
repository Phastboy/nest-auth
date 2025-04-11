import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RRuleOptions {
  @Field(() => String, { nullable: true })
  frequency?: string;

  @Field(() => Number, { nullable: true })
  interval?: number;

  @Field(() => Number, { nullable: true })
  count?: number;

  @Field(() => Date, { nullable: true })
  until?: Date;

  @Field(() => [Date], { nullable: true })
  byMonthDay?: Date[];

  @Field(() => [Number], { nullable: true })
  byMonth?: number[];

  @Field(() => [Number], { nullable: true })
  byDay?: number[];
}
