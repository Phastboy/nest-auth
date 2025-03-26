import { Injectable } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EventsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createEventInput: CreateEventInput) {
    return await this.prismaService.event.create({
      data: createEventInput,
    });
  }

  async findAll() {
    return await this.prismaService.event.findMany({
      include: {
        user: true,
        rsvps: true,
        likes: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.event.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateEventInput: UpdateEventInput) {
    return 'chill';
  }

  async remove(id: number) {
    return await this.prismaService.event.delete({
      where: {
        id,
      },
    });
  }
}
