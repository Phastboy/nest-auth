import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CommentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCommentInput: CreateCommentInput) {
    return await this.prismaService.comment.create({
      data: createCommentInput,
    });
  }

  async findAll() {
    return await this.prismaService.comment.findMany({
      include: {
        user: true,
        replies: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.comment.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        replies: true,
      },
    });
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
