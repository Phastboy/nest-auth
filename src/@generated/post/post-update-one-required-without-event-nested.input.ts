import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutEventInput } from './post-create-without-event.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutEventInput } from './post-create-or-connect-without-event.input';
import { PostUpsertWithoutEventInput } from './post-upsert-without-event.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutEventInput } from './post-update-to-one-with-where-without-event.input';

@InputType()
export class PostUpdateOneRequiredWithoutEventNestedInput {
  @Field(() => PostCreateWithoutEventInput, { nullable: true })
  @Type(() => PostCreateWithoutEventInput)
  create?: PostCreateWithoutEventInput;

  @Field(() => PostCreateOrConnectWithoutEventInput, { nullable: true })
  @Type(() => PostCreateOrConnectWithoutEventInput)
  connectOrCreate?: PostCreateOrConnectWithoutEventInput;

  @Field(() => PostUpsertWithoutEventInput, { nullable: true })
  @Type(() => PostUpsertWithoutEventInput)
  upsert?: PostUpsertWithoutEventInput;

  @Field(() => PostWhereUniqueInput, { nullable: true })
  @Type(() => PostWhereUniqueInput)
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

  @Field(() => PostUpdateToOneWithWhereWithoutEventInput, { nullable: true })
  @Type(() => PostUpdateToOneWithWhereWithoutEventInput)
  update?: PostUpdateToOneWithWhereWithoutEventInput;
}
