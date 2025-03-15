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
import { AuthGuard } from '@nestjs/passport';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostEntity } from '@prisma/client';
import { PostsService } from './posts.service';
import { Logger } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Req() req: any,
    @Body() createPostDto: CreatePostDto,
  ): Promise<PostEntity> {
    Logger.log(req);
    return await this.postsService.create(req.user.userId, createPostDto);
  }

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostEntity> {
    return await this.postsService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostEntity> {
    return await this.postsService.update(req.user.userId, +id, updatePostDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Req() req: any, @Param('id') id: string): Promise<PostEntity> {
    return await this.postsService.remove(req.user.userId, +id);
  }
}
