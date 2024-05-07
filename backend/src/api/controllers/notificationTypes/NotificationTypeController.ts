import { Request, Response } from 'express';
import { NotificationTypeService } from '../../../core/services/notificationTypes/NotificationTypeService';
import { NotificationTypeEntity } from '../../../core/entities/NotificationTypeEntity';
import logger from '../../../utils/logger';

const notificationTypeService = new NotificationTypeService();

export const getAllNotificationTypes = async (req: Request, res: Response) => {
  try {
    const notificationTypes = await notificationTypeService.getAllNotificationTypes();
    res.status(200).json(notificationTypes);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to get notification types' });
  }
};

export const createNotificationType = async (req: Request, res: Response) => {
  try {
    const notificationTypeData: NotificationTypeEntity = req.body;
    const newNotificationType = await notificationTypeService.createNotificationType(notificationTypeData);
    res.status(201).json(newNotificationType);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to create notification type' });
  }
};