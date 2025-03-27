import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { PrismaService } from 'nestjs-prisma';
import { Event } from 'src/@generated';

@Injectable()
export class EventsService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(EventsService.name);

  private readonly eventRelations = {
    include: {
      categories: true,
      post: true,
    },
  };

  async createEvent(
    userId: number,
    newEventData: CreateEventInput,
  ): Promise<Event> {
    // Automatically set shareAsPost to true if post is provided
    const shareAsPost = newEventData.post
      ? true
      : (newEventData.shareAsPost ?? false);
    const { post, ...eventData } = newEventData;

    // Validate the relationship between shareAsPost and post
    if (shareAsPost && !post) {
      throw new BadRequestException(
        'Post details are required when shareAsPost is true',
      );
    }

    if (post && !shareAsPost) {
      throw new BadRequestException(
        'shareAsPost must be true when providing post details',
      );
    }

    if (shareAsPost && post) {
      return this.prismaService.$transaction(async (prisma) => {
        //  Create the event
        const event = await prisma.event.create({
          data: {
            ...eventData,
            userId,
            shareAsPost: true,
          },
        });

        this.logger.log('Event created successfully:', event);

        //  Create the post associated with the event
        await prisma.post.create({
          data: {
            ...post,
            isEvent: true,
            userId,
            eventId: event.id,
          },
        });

        return event;
      });
    }

    // Create event without post
    return this.prismaService.event.create({
      data: {
        ...eventData,
        userId,
        shareAsPost: false,
      },
      ...this.eventRelations,
    });
  }

  async getAllEvents(): Promise<Event[]> {
    return this.prismaService.event.findMany({
      ...this.eventRelations,
    });
  }

  async getEventById(eventId: number): Promise<Event> {
    const event = await this.prismaService.event.findUnique({
      where: { id: eventId },
      ...this.eventRelations,
    });

    if (!event) {
      throw new NotFoundException(`Event with ID ${eventId} not found`);
    }

    return event;
  }

  async updateEvent(
    requestingUserId: number,
    eventId: number,
    updateData: UpdateEventInput,
  ): Promise<Event> {
    await this.verifyEventOwnership(eventId, requestingUserId);

    const shareAsPost = updateData.post ? true : updateData.shareAsPost;
    const { post, ...eventData } = updateData;

    // Validate the relationship between shareAsPost and post
    if (shareAsPost && !post) {
      throw new BadRequestException(
        'Post details are required when shareAsPost is true',
      );
    }

    if (post && shareAsPost === false) {
      throw new BadRequestException(
        'shareAsPost must be true when providing post details',
      );
    }

    if (shareAsPost && post) {
      return this.prismaService.$transaction(async (prisma) => {
        const event = await prisma.event.update({
          where: { id: eventId },
          data: {
            ...eventData,
            shareAsPost: true,
          },
        });

        // Upsert the associated post
        const existingPost = await prisma.post.findFirst({
          where: { eventId },
        });

        if (existingPost) {
          await prisma.post.update({
            where: { id: existingPost.id },
            data: {
              ...post,
              isEvent: true,
            },
          });
        } else {
          await prisma.post.create({
            data: {
              ...post,
              isEvent: true,
              userId: requestingUserId,
              eventId,
            },
          });
        }

        return event;
      });
    }

    // Handle case where shareAsPost is being set to false
    if (shareAsPost === false) {
      return this.prismaService.$transaction(async (prisma) => {
        // Delete any existing post
        await prisma.post.deleteMany({
          where: { eventId },
        });

        return prisma.event.update({
          where: { id: eventId },
          data: {
            ...eventData,
            shareAsPost: false,
          },
          ...this.eventRelations,
        });
      });
    }

    // Regular update without post changes
    return this.prismaService.event.update({
      where: { id: eventId },
      data: eventData,
      ...this.eventRelations,
    });
  }

  async deleteEvent(requestingUserId: number, eventId: number): Promise<Event> {
    await this.verifyEventOwnership(eventId, requestingUserId);

    return this.prismaService.$transaction(async (prisma) => {
      // Delete associated post first if exists
      await prisma.post.deleteMany({
        where: { eventId },
      });

      return prisma.event.delete({
        where: { id: eventId },
        ...this.eventRelations,
      });
    });
  }

  private async verifyEventOwnership(
    eventId: number,
    userId: number,
  ): Promise<void> {
    const event = await this.prismaService.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      throw new NotFoundException(`Event with ID ${eventId} not found`);
    }

    if (event.userId !== userId) {
      throw new ForbiddenException(
        `User ${userId} is not the organizer of event ${eventId}`,
      );
    }
  }
}
