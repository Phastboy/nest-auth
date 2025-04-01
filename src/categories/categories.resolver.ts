import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category, Role } from 'src/@generated';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CurrentUser } from 'src/auth/current-user/current-user.decorator';
import { AuthenticatedUser } from 'src/auth/types/auth.types';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CategoryIncludeInput } from './types/category-include.input';

/**
 * @class CategoriesResolver
 * @description Resolver for managing categories
 */
@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  /**
   * @description Create a new category
   * @param {CreateCategoryInput} newCategoryData - The data for the new category
   * @param {CategoryIncludeInput} include - Optional includes for the category
   * @return The created category
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'superadmin')
  @Mutation(() => Category,{
    name: 'createCategory',
    description: 'Create a new category',
  })
  async createCategory(
    @Args('data') newCategoryData: CreateCategoryInput,
    @Args('include', { nullable: true }) include?: CategoryIncludeInput
  ): Promise<Category> {
    return this.categoriesService.createCategory(newCategoryData, include);
  }

  /**
   * @description Get all categories with optional includes
   * @param {CategoryIncludeInput} include - Optional includes for the category
   * @return An array of categories
   */
  @Query(() => [Category], {
    name: 'categories',
    description: 'Get all categories',
  })
  async getAllCategories(
    @Args('include', { nullable: true }) include?: CategoryIncludeInput
  ): Promise<Category[]> {
    return this.categoriesService.getAllCategories(include);
  }

  /**
   * @description Get a category by ID
   * @param {number} categoryId - The ID of the category to retrieve
   * @param {CategoryIncludeInput} include - Optional includes for the category
   * @return The requested category
   */
  @Query(() => Category, {
    name: 'category',
    description: 'Get a category by ID'
  })
  async getCategory(
    @Args('categoryId', { type: () => Int }) categoryId: number,
    @Args('include', { nullable: true }) include?: CategoryIncludeInput
  ): Promise<Category> {
    return this.categoriesService.getCategory(categoryId, include);
  }

  /**
   * @description Update a category by ID
   * @param {number} categoryId - The ID of the category to update
   * @param {UpdateCategoryInput} updateCategoryInput - The data to update the category with
   * @return The updated category
   */

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'superadmin')
  @Mutation(() => Category)
  async updateCategory(
    @Args('categoryId', { type: () => Int }) categoryId: number,
    @Args('data') updateData: UpdateCategoryInput,
    @Args('include', { nullable: true }) include?: CategoryIncludeInput
  ): Promise<Category> {
    return this.categoriesService.updateCategory(categoryId, updateData, include);
  }

  /** 
   * @description Delete a category by ID
   * @param {number} categoryId - The ID of the category to delete
   * @return The deleted category
   * */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'superadmin')
  @Mutation(() => Category)
  async deleteCategory(
    @Args('categoryId', { type: () => Int }) categoryId: number,
    @Args('include', { nullable: true }) include?: CategoryIncludeInput
  ): Promise<Category> {
    return this.categoriesService.deleteCategory(categoryId, include);
  }
}
