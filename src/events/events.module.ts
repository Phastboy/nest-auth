import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsResolver } from './events.resolver';
import { RecurrenceService } from 'src/recurrence/recurrence.service';
import { ErrorHandler } from 'src/error-handler/error.util';

@Module({
  providers: [
    EventsResolver, 
    EventsService, 
    RecurrenceService, 
    ErrorHandler
  ],
})
export class EventsModule {}
