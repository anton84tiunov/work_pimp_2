import { AppDataSource } from '../../configs/app-data-source';
import { LanguageEntity } from '../entities/LanguageEntity';

export const LanguageRepository = AppDataSource.manager.getRepository(LanguageEntity);


