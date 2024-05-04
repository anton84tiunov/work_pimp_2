import { AppDataSource } from '../../../configs/app-data-source';
import { NotificationEntity } from '../../entities/NotificationEntity';


export const NotificationRepository = AppDataSource.manager.getRepository(NotificationEntity);



