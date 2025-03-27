import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  slug!: string;
}
