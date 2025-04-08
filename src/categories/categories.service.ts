import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { CategoryIncludeInput } from './types/category-include.input';
import { ErrorHandler } from 'src/error-handler/error.util';
import {
  CategoryWithDefaultRelations,
  DEFAULT_CATEGORY_TO_BE_INCLUDED,
} from './types/categories.types';
import { CreateCategoryInput } from './types/create-category.input';
import { UpdateCategoryInput } from './types/update-category.input';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly handler: ErrorHandler,
  ) {}

  /**
   * Helper function to merge default includes with optional ones
   */
  private buildIncludeObject(
    includeInput?: CategoryIncludeInput,
  ): Prisma.CategoryInclude {
    return {
      ...DEFAULT_CATEGORY_TO_BE_INCLUDED,
      ...(includeInput && {
        parent: includeInput.parent ?? undefined,
        children: includeInput.children ?? undefined,
        posts: includeInput.posts ?? undefined,
        events: includeInput.events ?? undefined,
        _count: includeInput._count ?? undefined,
      }),
    };
  }

  /**
   * @method generateSlug
   * @description Generates a slug for the given category name
   * @param {string} name - The name of the category
   * @returns {string} The generated slug
   */
  private generateSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  /**
   * Create a new category
   * @param {CategoryIncludeInput} newCategoryData - The data for the new category
   * @param {CategoryIncludeInput} includeInput - Optional includes for the category
   * @returns {CategoryWithDefaultRelations} The created category with default relations
   * @throws any errors that occur during the creation process
   */
  async createCategory(
    newCategoryData: CreateCategoryInput,
    includeInput?: CategoryIncludeInput,
  ): Promise<CategoryWithDefaultRelations> {
    try {
      // Generate slug if not provided
      const slug = newCategoryData.slug
        ? newCategoryData.slug
        : this.generateSlug(newCategoryData.name);
      newCategoryData.slug = slug;
      return await this.prismaService.category.create({
        data: {
          ...newCategoryData,
          slug,
        },
        include: this.buildIncludeObject(includeInput),
      });
    } catch (error) {
      this.handler.handleError(error, {
        operation: 'createCategory',
        service: 'CategoriesService',
        metadata: {
          input: newCategoryData,
        },
      });
    }
  }

  /**
   * Get all categories with optional includes
   * @param {CategoryIncludeInput} includeInput - Optional includes for the categories
   * @returns {Promise<CategoryWithDefaultRelations[]>} The list of categories with default relations
   * @throws any errors that occur during the retrieval process
   */
  async getAllCategories(
    includeInput?: CategoryIncludeInput,
  ): Promise<CategoryWithDefaultRelations[]> {
    try {
      return await this.prismaService.category.findMany({
        include: this.buildIncludeObject(includeInput),
      });
    } catch (error) {
      this.handler.handleError(error, {
        operation: 'getAllCategories',
        service: 'CategoriesService',
      });
    }
  }

  /**
   * Get a category by ID with optional includes
   * @param {number} categoryId - The ID of the category to retrieve
   * @param {CategoryIncludeInput} includeInput - Optional includes for the category
   * @returns {Promise<CategoryWithDefaultRelations>} The category with default relations
   * @throws {NotFoundException} if the category is not found
   */
  async getCategory(
    categoryId: number,
    includeInput?: CategoryIncludeInput,
  ): Promise<CategoryWithDefaultRelations> {
    try {
      const category = await this.prismaService.category.findUnique({
        where: { id: categoryId },
        include: this.buildIncludeObject(includeInput),
      });

      if (!category) {
        throw new NotFoundException(`Category with ID ${categoryId} not found`);
      }
      return category;
    } catch (error) {
      this.handler.handleError(error, {
        operation: 'getCategory',
        service: 'CategoriesService',
        metadata: {
          categoryId,
        },
      });
    }
  }

  /**
   * Update a category by ID with optional includes
   * @param {number} categoryId - The ID of the category to update
   * @param {UpdateCategoryInput} updateData - The data to update the category with
   * @param {CategoryIncludeInput} includeInput - Optional includes for the updated category
   * @returns {Promise<CategoryWithDefaultRelations>} The updated category with default relations
   * @throws any errors that occur during the update process
   */
  async updateCategory(
    categoryId: number,
    updateData: UpdateCategoryInput,
    includeInput?: CategoryIncludeInput,
  ): Promise<CategoryWithDefaultRelations> {
    try {
      return await this.prismaService.category.update({
        where: { id: categoryId },
        data: updateData,
        include: this.buildIncludeObject(includeInput),
      });
    } catch (error) {
      this.handler.handleError(error, {
        operation: 'updateCategory',
        service: 'CategoriesService',
        metadata: {
          categoryId,
          input: updateData,
        },
      });
    }
  }

  /**
   * Delete a category by ID with optional includes
   * @param {number} categoryId - The ID of the category to delete
   * @param {CategoryIncludeInput} includeInput - Optional includes for the deleted category
   * @returns {Promise<CategoryWithDefaultRelations>} The deleted category with default relations
   * @throws any errors that occur during the deletion process
   */
  async deleteCategory(
    categoryId: number,
    includeInput?: CategoryIncludeInput,
  ): Promise<CategoryWithDefaultRelations> {
    try {
      const category = await this.prismaService.category.delete({
        where: { id: categoryId },
        include: this.buildIncludeObject(includeInput),
      });

      if (!category) {
        throw new NotFoundException(`Category with ID ${categoryId} not found`);
      }
      return category;
    } catch (error) {
      this.handler.handleError(error, {
        operation: 'deleteCategory',
        service: 'CategoriesService',
        metadata: {
          categoryId,
        },
      });
    }
  }
}
