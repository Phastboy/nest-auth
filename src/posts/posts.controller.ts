import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as IPost } from '@prisma/client';
import { PostsService } from './posts.service';
import { Logger } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import {
  AuthenticatedRequest,
  AuthenticatedUser,
} from 'src/interfaces/auth.types';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  private readonly logger = new Logger(PostsController.name);

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  async create(
    @Req() req: AuthenticatedRequest,
    @Body() createPostDto: CreatePostDto,
  ): Promise<IPost> {
    const { user }: { user: AuthenticatedUser } = req;
    this.logger.log(user);
    return await this.postsService.create(user.userId, createPostDto);
  }

  @Get()
  async findAll(): Promise<IPost[]> {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IPost> {
    return await this.postsService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  async update(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<IPost> {
    const { user }: { user: AuthenticatedUser } = req;
    return await this.postsService.update(user.userId, +id, updatePostDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  async remove(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ): Promise<IPost> {
    const { user }: { user: AuthenticatedUser } = req;
    return await this.postsService.remove(user.userId, +id);
  }
}
