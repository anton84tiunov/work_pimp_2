import { AppDataSource } from '../../../configs/app-data-source';
import { NotificationTypeEntity } from '../../entities/NotificationTypeEntity';

export const NotificationTypeRepository = AppDataSource.manager.getRepository(NotificationTypeEntity);

