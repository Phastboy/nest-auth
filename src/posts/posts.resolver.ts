import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from 'src/@generated';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  update(
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
    id: number,
    userId: number,
  ) {
    return this.postsService.update(userId, id, updatePostInput);
  }

  @Mutation(() => Post)
  remove(@Args('id') id: number, userId: number) {
    return this.postsService.remove(userId, id);
  }
}
