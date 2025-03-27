import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'nestjs-prisma';
import { Post } from 'src/@generated';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly postRelations = {
    include: {
      categories: true,
      comments: true,
      likes: true,
    },
  };

  async createPost(
    userId: number,
    newPostData: CreatePostInput,
  ): Promise<Post> {
    return this.prismaService.post.create({
      data: { ...newPostData, userId },
      ...this.postRelations,
    });
  }

  async getAllPosts(): Promise<Post[]> {
    return this.prismaService.post.findMany({
      ...this.postRelations,
    });
  }

  async getPostById(postId: number): Promise<Post> {
    const post = await this.prismaService.post.findUnique({
      where: { id: postId },
      ...this.postRelations,
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${postId} not found`);
    }

    return post;
  }

  async updatePost(
    requestingUserId: number,
    postId: number,
    updateData: UpdatePostInput,
  ): Promise<Post> {
    await this.verifyPostOwnership(postId, requestingUserId);

    return this.prismaService.post.update({
      where: { id: postId },
      data: updateData,
      ...this.postRelations,
    });
  }

  async deletePost(requestingUserId: number, postId: number): Promise<Post> {
    await this.verifyPostOwnership(postId, requestingUserId);

    return this.prismaService.post.delete({
      where: { id: postId },
      ...this.postRelations,
    });
  }

  private async verifyPostOwnership(
    postId: number,
    userId: number,
  ): Promise<void> {
    const post = await this.prismaService.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${postId} not found`);
    }

    if (post.userId !== userId) {
      throw new ForbiddenException(
        `User ${userId} is not the author of post ${postId}`,
      );
    }
  }
}
