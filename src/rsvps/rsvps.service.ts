import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRsvpInput } from './dto/create-rsvp.input';
import { UpdateRsvpInput } from './dto/update-rsvp.input';
import { PrismaService } from 'nestjs-prisma';
import { RSVP } from 'src/@generated';

@Injectable()
export class RsvpsService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly rsvpRelations = {
    include: {
      user: true,
      event: true,
    },
  };

  async createRsvp(
    userId: number,
    createRsvpInput: CreateRsvpInput,
  ): Promise<RSVP> {
    // Check if the user already RSVP'd to this event
    const existingRsvp = await this.prismaService.rSVP.findFirst({
      where: {
        userId,
        eventId: createRsvpInput.eventId,
      },
    });

    if (existingRsvp) {
      throw new ForbiddenException("You have already RSVP'd to this event");
    }

    return this.prismaService.rSVP.create({
      data: {
        ...createRsvpInput,
        userId,
      },
      ...this.rsvpRelations,
    });
  }

  async getAllRsvps(): Promise<RSVP[]> {
    return this.prismaService.rSVP.findMany({
      ...this.rsvpRelations,
    });
  }

  async getRsvpById(rsvpId: number): Promise<RSVP> {
    const rsvp = await this.prismaService.rSVP.findUnique({
      where: { id: rsvpId },
      ...this.rsvpRelations,
    });

    if (!rsvp) {
      throw new NotFoundException(`RSVP with ID ${rsvpId} not found`);
    }

    return rsvp;
  }

  async updateRsvp(
    requestingUserId: number,
    rsvpId: number,
    updateData: UpdateRsvpInput,
  ): Promise<RSVP> {
    await this.verifyRsvpOwnership(rsvpId, requestingUserId);

    return this.prismaService.rSVP.update({
      where: { id: rsvpId },
      data: updateData,
      ...this.rsvpRelations,
    });
  }

  async deleteRsvp(requestingUserId: number, rsvpId: number): Promise<RSVP> {
    await this.verifyRsvpOwnership(rsvpId, requestingUserId);

    return this.prismaService.rSVP.delete({
      where: { id: rsvpId },
      ...this.rsvpRelations,
    });
  }

  async getRsvpsForEvent(eventId: number): Promise<RSVP[]> {
    return this.prismaService.rSVP.findMany({
      where: { eventId },
      ...this.rsvpRelations,
    });
  }

  async getRsvpsForUser(userId: number): Promise<RSVP[]> {
    return this.prismaService.rSVP.findMany({
      where: { userId },
      ...this.rsvpRelations,
    });
  }

  private async verifyRsvpOwnership(
    rsvpId: number,
    userId: number,
  ): Promise<void> {
    const rsvp = await this.prismaService.rSVP.findUnique({
      where: { id: rsvpId },
    });

    if (!rsvp) {
      throw new NotFoundException(`RSVP with ID ${rsvpId} not found`);
    }

    if (rsvp.userId !== userId) {
      throw new ForbiddenException(
        `User ${userId} is not the owner of RSVP ${rsvpId}`,
      );
    }
  }
}
