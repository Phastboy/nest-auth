import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsResolver } from './notifications.resolver';
import { ErrorHandler } from 'src/error-handler/error.util';

@Module({
  providers: [NotificationsResolver, NotificationsService, ErrorHandler],
})
export class NotificationsModule {}
