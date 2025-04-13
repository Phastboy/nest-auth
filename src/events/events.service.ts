import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { PrismaService } from 'nestjs-prisma';
import { Event } from 'src/@generated';
import { EventIncludeInput } from './dto/event-include.input';
import { Prisma } from '@prisma/client';
import { DEFAULT_EVENT_RELATIONS_TO_BE_INCLUDED } from './dto/event.type';
import { RecurrenceService } from 'src/recurrence/recurrence.service';

@Injectable()
export class EventsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly recurrenceService: RecurrenceService,
  ) {}

  private readonly logger = new Logger(EventsService.name);

  private buildIncludeRelations(
    includeInput?: EventIncludeInput,
  ): Prisma.EventInclude {
    if (!includeInput) return DEFAULT_EVENT_RELATIONS_TO_BE_INCLUDED;

    const includeRelations: Prisma.EventInclude = {};
    Object.keys(includeInput).forEach((key) => {
      const typedKey = key as keyof EventIncludeInput;
      if (includeInput[typedKey] !== undefined) {
        includeRelations[typedKey] = includeInput[typedKey];
      }
    });

    return {
      ...DEFAULT_EVENT_RELATIONS_TO_BE_INCLUDED,
      ...includeRelations,
    };
  }

  async createEvent(
    userId: number,
    newEventData: CreateEventInput,
    includeInput?: EventIncludeInput,
  ): Promise<Event> {
    const recurrenceRule = newEventData.isRecurring
      ? this.recurrenceService.getRecurrences({
          rruleOptions: newEventData.recurrenceRule!,
        }).rruleString
      : undefined;

    const { categoryIds, shareAsPost, post, ...eventData } = newEventData;

    // If post is present, wrap both creations in a transaction
    if (shareAsPost && post) {
      return this.prismaService.$transaction(async (prisma) => {
        const event = await prisma.event.create({
          data: {
            ...eventData,
            userId,
            shareAsPost: true,
            isRecurring: newEventData.isRecurring,
            recurrenceRule,
            categories: categoryIds
              ? {
                  connect: categoryIds.map((id) => ({ id })),
                }
              : undefined,
          },
        });

        this.logger.log(`Event created successfully with ID: ${event.id}`);

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

    // Just create event without post
    return this.prismaService.event.create({
      data: {
        ...eventData,
        userId,
        shareAsPost: false,
        isRecurring: newEventData.isRecurring,
        recurrenceRule,
        categories: categoryIds
          ? {
              connect: categoryIds.map((id) => ({ id })),
            }
          : undefined,
      },
      include: this.buildIncludeRelations(includeInput),
    });
  }
}
