import { Module } from '@nestjs/common';
import { RsvpsService } from './rsvps.service';
import { RsvpsResolver } from './rsvps.resolver';

@Module({
  providers: [RsvpsResolver, RsvpsService],
})
export class RsvpsModule {}
