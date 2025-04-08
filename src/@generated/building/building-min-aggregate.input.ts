import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BuildingMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  number?: true;

  @Field(() => Boolean, { nullable: true })
  road?: true;

  @Field(() => Boolean, { nullable: true })
  landmark?: true;

  @Field(() => Boolean, { nullable: true })
  area?: true;

  @Field(() => Boolean, { nullable: true })
  longitude?: true;

  @Field(() => Boolean, { nullable: true })
  latitude?: true;

  @Field(() => Boolean, { nullable: true })
  capacity?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
}
