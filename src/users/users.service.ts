import { Injectable } from '@nestjs/common';
import { UserWithoutPassword } from '../interfaces/user.types';
import * as argon from 'argon2';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserInput): Promise<UserWithoutPassword> {
    const hashedPassword = await argon.hash(createUserDto.password);

    return await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
      omit: {
        password: true,
      },
    });
  }

  async findAll(): Promise<UserWithoutPassword[]> {
    return await this.prismaService.user.findMany({
      omit: {
        password: true,
      },
      include: {
        posts: true,
      },
    });
  }

  async findOne(id: number): Promise<UserWithoutPassword | null> {
    return await this.prismaService.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
      include: {
        posts: true,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserInput,
  ): Promise<UserWithoutPassword> {
    return await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
      omit: {
        password: true,
      },
    });
  }

  async remove(id: number): Promise<UserWithoutPassword> {
    return await this.prismaService.user.delete({
      where: { id },
      omit: {
        password: true,
      },
    });
  }
}
