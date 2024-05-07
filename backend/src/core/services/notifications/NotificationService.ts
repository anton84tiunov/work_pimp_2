import logger from "../../../utils/logger";
import { NotificationEntity } from "../../entities/NotificationEntity";
import { NotificationRepository } from "../../repositories/NotificationRepository";

export class NotificationService {
    async createNotification(notification: NotificationEntity): Promise<NotificationEntity> {
        try {
            return await NotificationRepository.save(notification);
        } catch (error) {
            throw error;
        }
    }

    async findAllNotifications(): Promise<NotificationEntity[]> {
        try {
            return await NotificationRepository.find();
        } catch (error) {
            throw error;
        }
    }
}

