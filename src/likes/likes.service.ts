import { Injectable } from '@nestjs/common';
import { CreateLikeInput } from './dto/create-like.input';
import { UpdateLikeInput } from './dto/update-like.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class LikesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createLikeInput: CreateLikeInput) {
    return await this.prismaService.like.create({
      data: createLikeInput,
    });
  }

  async findAll() {
    return await this.prismaService.like.findMany({
      include: {
        user: true,
        post: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.like.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        post: true,
      },
    });
  }

  update(id: number, updateLikeInput: UpdateLikeInput) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
