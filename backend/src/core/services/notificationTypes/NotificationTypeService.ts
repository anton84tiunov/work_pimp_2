import logger from '../../../utils/logger';
import { NotificationTypeEntity } from '../../entities/NotificationTypeEntity';
import { NotificationTypeRepository } from '../../repositories/notificationTypes/NotificationTypeRepository';

export class NotificationTypeService{
    async createNotificationType(notificationTypeData: NotificationTypeEntity): Promise<NotificationTypeEntity> {
        try {
          return await NotificationTypeRepository.save(notificationTypeData);
        } catch (error) {
          logger.error(error.stack);
          console.error('Error creating notification type:', error);
          throw new Error('Failed to create notification type');
        }
    }

    async getAllNotificationTypes(): Promise<NotificationTypeEntity[]> {
        try {
          return await NotificationTypeRepository.find({ relations: ['notifications'] });
        } catch (error) {
          logger.error(error.stack);
          console.error('Error getting all notification types:', error);
          throw new Error('Failed to get all notification types');
        }
    }

      
}
