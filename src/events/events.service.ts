import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { PrismaService } from 'nestjs-prisma';
import { EventIncludeInput } from './dto/event-include.input';
import { EventMode, EventStatus, EventType, Prisma } from '@prisma/client';
import {
  DEFAULT_EVENT_RELATIONS_TO_BE_INCLUDED,
  EventWithRelations,
} from './dto/event.type';
import { RecurrenceService } from 'src/recurrence/recurrence.service';
import { ErrorHandler } from 'src/error-handler/error.util';

/**
 * @description Interface for filtering events
 * @property userId - ID of the user who created the event
 * @property categoryId - ID of the category the event belongs to
 * @property eventStatus - Status of the event (e.g., active, inactive)
 * @property eventType - Type of the event (e.g., public, private)
 * @property eventMode - Mode of the event (e.g., online, offline)
 */
export interface IEventFilter {
  userId?: number;
  categoryId?: number;
  eventStatus?: EventStatus;
  eventType?: EventType;
  eventMode?: EventMode;
}

/**
 * @class EventsService for managing events
 * @description This class handles the business logic for creating, retrieving, and managing events.
 */
@Injectable()
export class EventsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly recurrenceService: RecurrenceService,
    private readonly handler: ErrorHandler,
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

  /**
   * @method createEvent
   * @description Creates a new event and optionally shares it as a post.
   * @param userId the user ID of the event creator
   * @param newEventData the data for the new event
   * @param includeInput the relations to include in the event response
   * @returns the created event
   * @throws BadRequestException if the event creation fails
   */
  async createEvent(
    userId: number,
    newEventData: CreateEventInput,
    includeInput?: EventIncludeInput,
  ): Promise<EventWithRelations> {
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
          include: this.buildIncludeRelations(includeInput),
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

  /**
   * @method findAllEvents
   * @description Retrieves all events, optionally filtered by user ID and category ID.
   * @param filter the filter criteria for retrieving events
   * @param includeInput the relations to include in the event response
   * @returns an array of events
   * @throws BadRequestException if the event retrieval fails
   */
  async findAllEvents(
    filter: IEventFilter,
    includeInput?: EventIncludeInput,
  ): Promise<EventWithRelations[]> {
    const where: Prisma.EventWhereInput = {
      ...(filter.userId && { userId: filter.userId }),
      ...(filter.categoryId && {
        categories: {
          some: {
            id: filter.categoryId,
          },
        },
      }),
      ...(filter.eventStatus && { eventStatus: filter.eventStatus }),
      ...(filter.eventType && { eventType: filter.eventType }),
      ...(filter.eventMode && { eventMode: filter.eventMode }),
    };
    try {
      return await this.prismaService.event.findMany({
        where,
        include: this.buildIncludeRelations(includeInput),
      });
    } catch (error) {
      this.handler.handleError(error, {
        operation: 'findAllEvents',
        service: 'EventsService',
        metadata: {
          filter,
          includeInput,
        },
      });
    }
  }
}
