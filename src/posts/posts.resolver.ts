import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { PostCreateManyInput, PostUpdateInput } from 'src/@generated';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation('createPost')
  create(@Args('createPostInput') createPostInput: PostCreateManyInput) {
    return this.postsService.create(createPostInput);
  }

  @Query('posts')
  findAll() {
    return this.postsService.findAll();
  }

  @Query('post')
  findOne(@Args('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation('updatePost')
  update(
    @Args('updatePostInput') updatePostInput: PostUpdateInput,
    id: number,
    userId: number,
  ) {
    return this.postsService.update(userId, id, updatePostInput);
  }

  @Mutation('removePost')
  remove(@Args('id') id: number, userId: number) {
    return this.postsService.remove(userId, id);
  }
}
