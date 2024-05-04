import express, { Request, Response } from 'express';
import {  createNotification, getAllNotification } from '../controllers/notifications/NotificationsController';
import { NotificationValidatorValidationRules } from '../utils/validators/notifications/NotificationValidator';
import { validate } from '../utils/validators/Validator';

const NotificationRouter = express.Router();

NotificationRouter.post(
    '/create',
    NotificationValidatorValidationRules(),
    validate,
    createNotification
  );
NotificationRouter.post('/get_all', getAllNotification);

export default NotificationRouter;


