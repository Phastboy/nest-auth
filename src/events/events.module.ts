import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsResolver } from './events.resolver';
import { RecurrenceService } from 'src/recurrence/recurrence.service';

@Module({
  providers: [EventsResolver, EventsService, RecurrenceService],
})
export class EventsModule {}
