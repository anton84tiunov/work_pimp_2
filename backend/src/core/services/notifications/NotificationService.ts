import logger from "../../../utils/logger";
import { NotificationEntity } from "../../entities/NotificationEntity";
import { NotificationRepository } from "../../repositories/notifications/NotificationRepository";

export class NotificationService {
    async createNotification(notification: NotificationEntity): Promise<NotificationEntity> {
        try {
            return await NotificationRepository.save(notification);
        } catch (err) {
            logger.error(err.stack);
            console.error('Error creating notification:', err);
            throw new Error('Failed to create notification');
        }
    }

    async findAllNotifications(): Promise<NotificationEntity[]> {
        try {
            return await NotificationRepository.find();
        } catch (err) {
            logger.error(err.stack);
            console.error('Error getting all notifications:', err);
            throw new Error('Failed to get all notifications');
        }
    }
}

