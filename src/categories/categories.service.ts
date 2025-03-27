import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PrismaService } from 'nestjs-prisma';
import { Category } from 'src/@generated';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly categoryRelations = {
    include: {
      posts: true,
      events: true,
      parent: true,
      children: true,
    },
  };

  async createCategory(
    newCategoryData: CreateCategoryInput,
  ): Promise<Category> {
    return this.prismaService.category.create({
      data: {
        ...newCategoryData,
      },
      ...this.categoryRelations,
    });
  }

  async getAllCategories(): Promise<Category[]> {
    return this.prismaService.category.findMany({
      ...this.categoryRelations,
    });
  }

  async getCategoryById(categoryId: number): Promise<Category> {
    const category = await this.prismaService.category.findUnique({
      where: { id: categoryId },
      ...this.categoryRelations,
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    return category;
  }

  async updateCategory(
    categoryId: number,
    updateData: UpdateCategoryInput,
  ): Promise<Category> {
    return this.prismaService.category.update({
      where: { id: categoryId },
      data: updateData,
      ...this.categoryRelations,
    });
  }

  async deleteCategory(categoryId: number): Promise<Category> {
    return this.prismaService.category.delete({
      where: { id: categoryId },
      ...this.categoryRelations,
    });
  }
}
