import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { PrismaService } from 'nestjs-prisma';
import { Comment } from 'src/@generated';

@Injectable()
export class CommentsService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly commentWithRelations = {
    include: {
      user: true,
      post: true,
      replies: true,
    },
  };

  async createComment(
    authorId: number,
    newCommentData: CreateCommentInput
  ): Promise<Comment> {
    return this.prismaService.comment.create({
      data: { ...newCommentData, userId: authorId },
      ...this.commentWithRelations,
    });
  }

  async getAllComments(): Promise<Comment[]> {
    return this.prismaService.comment.findMany({
      ...this.commentWithRelations,
    });
  }

  async getCommentById(commentId: number): Promise<Comment> {
    const comment = await this.prismaService.comment.findUnique({
      where: { id: commentId },
      ...this.commentWithRelations,
    });

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${commentId} not found`);
    }

    return comment;
  }

  async updateComment(
    requestingUserId: number,
    commentId: number,
    updateData: UpdateCommentInput
  ): Promise<Comment> {
    await this.verifyCommentOwnership(commentId, requestingUserId);

    return this.prismaService.comment.update({
      where: { id: commentId },
      data: updateData,
      ...this.commentWithRelations,
    });
  }

  async deleteComment(
    requestingUserId: number,
    commentId: number
  ): Promise<Comment> {
    await this.verifyCommentOwnership(commentId, requestingUserId);

    return this.prismaService.comment.delete({
      where: { id: commentId },
      ...this.commentWithRelations,
    });
  }

  private async verifyCommentOwnership(
    commentId: number,
    userId: number
  ): Promise<void> {
    const comment = await this.prismaService.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${commentId} not found`);
    }

    if (comment.userId !== userId) {
      throw new ForbiddenException(
        `User ${userId} is not the owner of comment ${commentId}`
      );
    }
  }
}
