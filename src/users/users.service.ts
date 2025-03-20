import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserWithoutPassword } from '../interfaces/user.types';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserWithoutPassword> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    try {
      const user = await this.prismaService.user.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
        },
        omit: {
          password: true,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle unique constraint violations
        if (error.code === 'P2002') {
          const target = error.meta?.target as string[];
          if (target.includes('email')) {
            throw new ConflictException('Email already exists.');
          } else if (target.includes('username')) {
            throw new ConflictException('Username already exists.');
          }
        }
      }

      // other errors
      throw new InternalServerErrorException(
        'Something went wrong while creating the user.',
      );
    }
  }

  async findAll(): Promise<UserWithoutPassword[]> {
    return await this.prismaService.user.findMany({
      omit: {
        password: true,
      },
    });
  }

  async findOne(id: number): Promise<UserWithoutPassword | null> {
    return await this.prismaService.user.findUnique({
      where: { id },
      omit: {
        password: true,
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
    updateUserDto: UpdateUserDto,
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
