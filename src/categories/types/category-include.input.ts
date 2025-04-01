import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CategoryIncludeInput {
  @Field(() => Boolean, { nullable: true })
  parent?: boolean;

  @Field(() => Boolean, { nullable: true })
  children?: boolean;

  @Field(() => Boolean, { nullable: true })
  posts?: boolean;

  @Field(() => Boolean, { nullable: true })
  events?: boolean;

  @Field(() => Boolean, { nullable: true })
  _count?: boolean;
}
