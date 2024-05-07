import { AppDataSource } from '../../configs/app-data-source';
import { LocationEntity } from '../entities/LocationEntity';


export const LocationRepository = AppDataSource.manager.getRepository(LocationEntity);



