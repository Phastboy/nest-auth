import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostScalarWhereInput } from './post-scalar-where.input';
import { Type } from 'class-transformer';
import { PostUpdateManyMutationInput } from './post-update-many-mutation.input';

@InputType()
export class PostUpdateManyWithWhereWithoutCategoriesInput {
  @Field(() => PostScalarWhereInput, { nullable: false })
  @Type(() => PostScalarWhereInput)
  where!: PostScalarWhereInput;

  @Field(() => PostUpdateManyMutationInput, { nullable: false })
  @Type(() => PostUpdateManyMutationInput)
  data!: PostUpdateManyMutationInput;
}
