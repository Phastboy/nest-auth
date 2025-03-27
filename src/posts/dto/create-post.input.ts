import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Boolean, { nullable: true })
  isEvent?: boolean;
}
