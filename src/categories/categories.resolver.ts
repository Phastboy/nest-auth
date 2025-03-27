import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from 'src/@generated';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/auth/current-user/current-user.decorator';
import { AuthenticatedUser } from 'src/interfaces/auth.types';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoriesService.createCategory(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  async getAllCategories() {
    return await this.categoriesService.getAllCategories();
  }

  @Query(() => Category, { name: 'category' })
  getCategoryById(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.getCategoryById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Category)
  updateCategory(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoriesService.updateCategory(id, updateCategoryInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Category)
  deleteCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.deleteCategory(id);
  }
}
