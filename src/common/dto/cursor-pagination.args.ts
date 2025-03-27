import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CursorPaginationArgs {
  @Field(() => Int, { defaultValue: 10 })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  cursor?: number;

  @Field(() => Date, { nullable: true })
  beforeDate?: Date;
}
