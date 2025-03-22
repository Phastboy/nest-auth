import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { PostCreateInput, PostUpdateInput } from 'src/@generated';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    // userId: number,
    createPostDto: PostCreateInput,
  ): Promise<Post> {
    return await this.prismaService.post.create({
      data: {
        ...createPostDto,
        //userId,
      },
    });
  }

  async findAll(): Promise<Post[]> {
    return await this.prismaService.post.findMany({});
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.prismaService.post.findUnique({
      where: { id },
    });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async update(
    userId: number,
    id: number,
    updatePostDto: PostUpdateInput,
  ): Promise<Post> {
    const post = await this.prismaService.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    if (post.userId !== userId) {
      throw new UnauthorizedException('You are not the author of this post');
    }
    return await this.prismaService.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async remove(userId: number, id: number): Promise<Post> {
    const post = await this.prismaService.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    if (post.userId !== userId) {
      throw new UnauthorizedException('You are not the author of this post');
    }
    return await this.prismaService.post.delete({ where: { id } });
  }
}
