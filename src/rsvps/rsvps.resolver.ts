import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RsvpsService } from './rsvps.service';
import { RSVP } from 'src/@generated';
import { CreateRsvpInput } from './dto/create-rsvp.input';
import { UpdateRsvpInput } from './dto/update-rsvp.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/auth/current-user/current-user.decorator';
import { AuthenticatedUser } from 'src/interfaces/auth.types';

@Resolver(() => RSVP)
export class RsvpsResolver {
  constructor(private readonly rsvpsService: RsvpsService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => RSVP)
  createRsvp(
    @Args('createRsvpInput') createRsvpInput: CreateRsvpInput,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.rsvpsService.createRsvp(user.userId, createRsvpInput);
  }

  @Query(() => [RSVP], { name: 'rsvps' })
  getAllRsvps() {
    return this.rsvpsService.getAllRsvps();
  }

  @Query(() => RSVP, { name: 'rsvp' })
  getRsvpById(@Args('id', { type: () => Int }) id: number) {
    return this.rsvpsService.getRsvpById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => RSVP)
  updateRsvp(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateRsvpInput') updateRsvpInput: UpdateRsvpInput,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.rsvpsService.updateRsvp(user.userId, id, updateRsvpInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => RSVP)
  deleteRsvp(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.rsvpsService.deleteRsvp(user.userId, id);
  }

  @Query(() => [RSVP], { name: 'eventRsvps' })
  getRsvpsForEvent(@Args('eventId', { type: () => Int }) eventId: number) {
    return this.rsvpsService.getRsvpsForEvent(eventId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [RSVP], { name: 'myRsvps' })
  getRsvpsForUser(@CurrentUser() user: AuthenticatedUser) {
    return this.rsvpsService.getRsvpsForUser(user.userId);
  }
}
