import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from 'src/@generated';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/auth/current-user/current-user.decorator';
import { AuthenticatedUser } from 'src/interfaces/auth.types';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Post)
  createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.postsService.createPost(user.userId, createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  async getAllPosts() {
    return await this.postsService.getAllPosts();
  }

  @Query(() => Post, { name: 'post' })
  getPostById(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.getPostById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Post)
  updatePost(
    @Args('id', { type: () => Int }) id: number,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.postsService.updatePost(user.userId, id, updatePostInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Post)
  deletePost(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.postsService.deletePost(user.userId, id);
  }
}
