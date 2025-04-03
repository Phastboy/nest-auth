import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';
import { PrismaService } from 'nestjs-prisma';
import { Notification } from '@prisma/client';
import { ErrorHandler } from 'src/error-handler/error.util';

/**
 * @class NotificationsService
 * @description Service for managing notifications
 */
@Injectable()
export class NotificationsService {
  constructor(private readonly prismaService: PrismaService, private readonly handler: ErrorHandler) {}

  /**
   * @method createNotification
   * @description Creates a new notification
   * @param {CreateNotificationInput} createNotificationInput - The input data for creating a notification
   * @returns {Promise<Notification>} - A message indicating the notification has been created
   */
  async createNotification(createNotificationInput: CreateNotificationInput): Promise<Notification> {
    try {
      return this.prismaService.notification.create({
        data: {
          ...createNotificationInput,
        },
      });
    } catch (error) {
      this.handler.handleError(error, {
        service: 'NotificationsService',
        method: 'createNotification',
        operation: 'createNotification',
        metadata: {
          input: createNotificationInput,
        },
      });
    }
  }

  /**
   * @method findAll
   * @description Retrieves all notifications
   * @returns {Promise<Notification[]>} - A list of all notifications
   */
  async findAll(): Promise<Notification[]> {
    try {
      return this.prismaService.notification.findMany();
    } catch (error) {
      this.handler.handleError(error, {
        service: 'NotificationsService',
        method: 'findAll',
        operation: 'findAll',
        metadata: {},
      });
    }
  }

  /**
   * @method findOne
   * @description Retrieves a notification by its ID
   * @param {number} notificationId - The ID of the notification to retrieve
   * @returns {Promise<Notification>} - The notification with the specified ID
   */
  async findOne(notificationId: number): Promise<Notification> {
    try {
      const notification= await this.prismaService.notification.findUnique({
        where: {
          id: notificationId,
        },
      });

      if (!notification) {
        throw new  NotFoundException('Notification not found');
      }
      return notification;
    } catch (error) {
      this.handler.handleError(error, {
        service: 'NotificationsService',
        method: 'findOne',
        operation: 'findOne',
        metadata: {
          notificationId,
        },
      });
    }
  }

  /**
   * @method update
   * @description Updates a notification by its ID
   * @param {number} notificationId - The ID of the notification to update
   * @param {UpdateNotificationInput} updateNotificationInput - The input data for updating the notification
   * @returns {Promise<Notification>} - The updated notification
   */
  async update(
    notificationId: number,
    updateNotificationInput: UpdateNotificationInput,
  ): Promise<Notification> {
    try {
      return this.prismaService.notification.update({
        where: {
          id: notificationId,
        },
        data: {
          ...updateNotificationInput,
        },
      });
    } catch (error) {
      this.handler.handleError(error, {
        service: 'NotificationsService',
        method: 'update',
        operation: 'update',
        metadata: {
          notificationId,
          updateNotificationInput,
        },
      });
    }
  }

  /**
   * @method remove
   * @description Deletes a notification by its ID
   * @param {number} notificationId - The ID of the notification to delete
   * @returns {Promise<Notification>} - The deleted notification
   */
  async remove(notificationId: number): Promise<Notification> {
    try {
      return this.prismaService.notification.delete({
        where: {
          id: notificationId,
        },
      });
    } catch (error) {
      this.handler.handleError(error, {
        service: 'NotificationsService',
        method: 'remove',
        operation: 'remove',
        metadata: {
          notificationId,
        },
      });
    }
  }
}
