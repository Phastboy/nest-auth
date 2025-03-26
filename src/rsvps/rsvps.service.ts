import { Injectable } from '@nestjs/common';
import { CreateRsvpInput } from './dto/create-rsvp.input';
import { UpdateRsvpInput } from './dto/update-rsvp.input';

@Injectable()
export class RsvpsService {
  create(createRsvpInput: CreateRsvpInput) {
    return 'This action adds a new rsvp';
  }

  findAll() {
    return `This action returns all rsvps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rsvp`;
  }

  update(id: number, updateRsvpInput: UpdateRsvpInput) {
    return `This action updates a #${id} rsvp`;
  }

  remove(id: number) {
    return `This action removes a #${id} rsvp`;
  }
}
