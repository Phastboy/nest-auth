import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event, EventMode, EventStatus, EventType } from 'src/@generated';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { AuthenticatedUser } from 'src/auth/types/auth.types';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { EventIncludeInput } from './dto/event-include.input';
import { EventFilterInput } from './dto/event-filter.input';

/**
 * @Resolver for the Event entity
 * @description This class handles GraphQL queries and mutations related to events.
 * It uses the EventsService to perform the actual data operations.
 */
@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  /**
   * @method createEvent
   * @description Creates a new event and optionally shares it as a post.
   * @param createEventInput the data for the new event
   * @param user the authenticated user creating the event
   * @param includeInput the relations to include in the event response
   * @returns
   */
  @UseGuards(JwtAuthGuard)
  @Mutation(() => Event)
  createEvent(
    @Args('createEventInput') createEventInput: CreateEventInput,
    @CurrentUser() user: AuthenticatedUser,
    @Args('includeInput', { nullable: true })
    includeInput?: EventIncludeInput,
  ) {
    return this.eventsService.createEvent(
      user.userId,
      createEventInput,
      includeInput,
    );
  }

  /**
   * @method findAllEvents
   * @description Retrieves all events, optionally filtered by user ID and including specified relations.
   * @param user the authenticated user
   * @param filterInput optional filter input for filtering events
   * @param includeInput optional include input for including relations
   * @returns Event an array of events
   * @throws any errors that occur during the retrieval process
   */
  @Query(() => [Event])
  async findAllEvents(
    @Args('filterInput', { nullable: true }) filterInput: EventFilterInput,
    @Args('includeInput', { nullable: true })
    includeInput?: EventIncludeInput,
  ): Promise<Event[]> {
    return this.eventsService.findAllEvents(filterInput ?? {}, includeInput);
  }

  /**
   * @method findOneEvent
   * @description Retrieves a single event by its ID, optionally including specified relations.
   * @param eventId the ID of the event to retrieve
   * @param includeInput optional include input for including relations
   * @returns Event the retrieved event
   * @throws any errors that occur during the retrieval process
   */
  @Query(() => Event)
  async findOneEvent(
    @Args('eventId', { type: () => Int }) eventId: number,
    @Args('includeInput', { nullable: true })
    includeInput?: EventIncludeInput,
  ): Promise<Event> {
    return this.eventsService.findEventById(eventId, includeInput);
  }

  /**
   * @method updateEvent
   * @description Updates an existing event by its ID.
   * @param eventId the ID of the event to update
   * @param user the authenticated user updating the event
   * @param updateEventInput the data for updating the event
   * @param includeInput optional include input for including relations
   * @returns Event the updated event
   */
  @UseGuards(JwtAuthGuard)
  @Mutation(() => Event)
  async updateEvent(
    @Args('eventId', { type: () => Int }) eventId: number,
    @CurrentUser() user: AuthenticatedUser,
    @Args('updateEventInput') updateEventInput: UpdateEventInput,
    @Args('includeInput', { nullable: true })
    includeInput?: EventIncludeInput,
  ): Promise<Event> {
    return this.eventsService.updateEvent(
      eventId,
      user.userId,
      updateEventInput,
      includeInput,
    );
  }

  /**
   * @method removeEvent
   * @description Deletes an event by its ID.
   * @param eventId the ID of the event to delete
   * @param user the authenticated user deleting the event
   * @returns Event the deleted event
   */
  @UseGuards(JwtAuthGuard)
  @Mutation(() => Event)
  async removeEvent(
    @Args('eventId', { type: () => Int }) eventId: number,
    @CurrentUser() user: AuthenticatedUser,
    @Args('includeInput', { nullable: true })
    includeInput?: EventIncludeInput,
  ): Promise<Event> {
    return this.eventsService.deleteEvent(eventId, user.userId, includeInput);
  }
}
