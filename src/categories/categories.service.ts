import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryInput: CreateCategoryInput) {
    return await this.prisma.category.create({
      data: createCategoryInput,
    });
  }

  async findAll() {
    return await this.prisma.category.findMany({
      include: {
        parent: true,
        children: true,
        posts: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.category.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        parent: true,
        children: true,
        posts: true,
      },
    });
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    return await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
