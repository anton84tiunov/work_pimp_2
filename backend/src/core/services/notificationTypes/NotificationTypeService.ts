import logger from '../../../utils/logger';
import { NotificationTypeEntity } from '../../entities/NotificationTypeEntity';
import { NotificationTypeRepository } from '../../repositories/NotificationTypeRepository';

export class NotificationTypeService{
    async createNotificationType(notificationTypeData: NotificationTypeEntity): Promise<NotificationTypeEntity> {
        try {
          return await NotificationTypeRepository.save(notificationTypeData);
        } catch (error) {
          throw error;
        }
    }

    async getAllNotificationTypes(): Promise<NotificationTypeEntity[]> {
        try {
          return await NotificationTypeRepository.find({ relations: ['notifications'] });
        } catch (error) {
          throw error;
        }
    }

      
}
