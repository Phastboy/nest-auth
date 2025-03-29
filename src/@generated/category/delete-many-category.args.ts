import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCategoryArgs {
  @Field(() => CategoryWhereInput, { nullable: true })
  @Type(() => CategoryWhereInput)
  where?: CategoryWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
