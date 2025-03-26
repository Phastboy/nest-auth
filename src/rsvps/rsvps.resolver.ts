import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RsvpsService } from './rsvps.service';
import { RSVP } from './entities/rsvp.entity';
import { CreateRsvpInput } from './dto/create-rsvp.input';
import { UpdateRsvpInput } from './dto/update-rsvp.input';

@Resolver(() => RSVP)
export class RsvpsResolver {
  constructor(private readonly rsvpsService: RsvpsService) {}

  @Mutation(() => RSVP)
  createRsvp(@Args('createRsvpInput') createRsvpInput: CreateRsvpInput) {
    return this.rsvpsService.create(createRsvpInput);
  }

  @Query(() => [RSVP], { name: 'rsvps' })
  findAll() {
    return this.rsvpsService.findAll();
  }

  @Query(() => RSVP, { name: 'rsvp' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rsvpsService.findOne(id);
  }

  @Mutation(() => RSVP)
  updateRsvp(@Args('updateRsvpInput') updateRsvpInput: UpdateRsvpInput) {
    return this.rsvpsService.update(updateRsvpInput.id, updateRsvpInput);
  }

  @Mutation(() => RSVP)
  removeRsvp(@Args('id', { type: () => Int }) id: number) {
    return this.rsvpsService.remove(id);
  }
}
