import { Request, Response } from "express";
import { NotificationService } from "../../../core/services/notifications/NotificationService";
import { NotificationEntity } from "../../../core/entities/NotificationEntity";
import logger from "../../../utils/logger";

const notificationService = new NotificationService();

export const createNotification = async (req: Request, res: Response): Promise<void> => {
    try {
        const newNotificationData: NotificationEntity = req.body;
        const newNotification = await notificationService.createNotification(newNotificationData);
        res.json(newNotification);
    } catch (error) {
        logger.error(error.stack);
        console.error('Ошибка при создании совпадения:', error);
        res.status(500).json({ error: 'Ошибка при создании совпадения' });
    }
}

export const getAllNotification = async (req: Request, res: Response): Promise<void> => {
    try {
        const notification = await notificationService.findAllNotifications();
        res.json(notification);
    } catch (error) {
        logger.error(error.stack);
        console.error('Ошибка при получении совпадений:', error);
        res.status(500).json({ error: 'Ошибка при получении совпадений' });
    }
}


