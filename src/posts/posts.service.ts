import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: number, createPostDto: CreatePostDto): Promise<Post> {
    return await this.prismaService.post.create({
      data: {
        ...createPostDto,
        userId,
      },
    });
  }

  async findAll(): Promise<Post[]> {
    return await this.prismaService.post.findMany({
      where: { published: true },
    });
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
    updatePostDto: UpdatePostDto,
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
