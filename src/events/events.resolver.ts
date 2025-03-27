import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event } from 'src/@generated';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/auth/current-user/current-user.decorator';
import { AuthenticatedUser } from 'src/interfaces/auth.types';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Event)
  createEvent(
    @Args('createEventInput') createEventInput: CreateEventInput,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.eventsService.createEvent(user.userId, createEventInput);
  }

  @Query(() => [Event], { name: 'events' })
  async getAllEvents() {
    return await this.eventsService.getAllEvents();
  }

  @Query(() => Event, { name: 'event' })
  getEventById(@Args('id', { type: () => Int }) id: number) {
    return this.eventsService.getEventById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Event)
  updateEvent(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateEventInput') updateEventInput: UpdateEventInput,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.eventsService.updateEvent(
      user.userId,
      id,
      updateEventInput,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Event)
  deleteEvent(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.eventsService.deleteEvent(user.userId, id);
  }
}
