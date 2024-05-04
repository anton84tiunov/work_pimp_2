import express, { Request, Response } from 'express';
import {  createNotificationType, getAllNotificationTypes } from '../controllers/notificationTypes/NotificationTypeController';
import { NotificationTypeValidatorValidationRules } from '../utils/validators/notificationTypes/NotificationTypeValidator';
import { validate } from '../utils/validators/Validator';


const NotificationTypeRouter = express.Router();

NotificationTypeRouter.post(
    '/create',
    NotificationTypeValidatorValidationRules(),
    validate, 
);

NotificationTypeRouter.post('/get_all', getAllNotificationTypes);

export default NotificationTypeRouter;