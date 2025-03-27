import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { defaultValue: 10 })
  limit?: number = 10;

  @Field(() => Int, { defaultValue: 1 })
  page?: number = 1;

  @Field(() => Boolean, { defaultValue: false, nullable: true })
  includeTotalCount?: boolean;
}
