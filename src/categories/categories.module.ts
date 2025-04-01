import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { ErrorHandler } from 'src/error-handler/error.util';

@Module({
  providers: [CategoriesResolver, CategoriesService, ErrorHandler],
})
export class CategoriesModule {}
