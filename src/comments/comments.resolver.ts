import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from 'src/@generated';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/auth/current-user/current-user.decorator';
import { AuthenticatedUser } from 'src/interfaces/auth.types';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Comment)
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.commentsService.createComment(user.userId, createCommentInput);
  }

  @Query(() => [Comment], { name: 'comments' })
  async getComments() {
    return await this.commentsService.getAllComments();
  }

  @Query(() => Comment, { name: 'comment' })
  getCommentById(@Args('id', { type: () => Int }) id: number) {
    return this.commentsService.getCommentById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Comment)
  updateComment(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.commentsService.updateComment(
      user.userId,
      id,
      updateCommentInput,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Comment)
  deleteComment(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.commentsService.deleteComment(user.userId, id);
  }
}
