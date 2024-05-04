// ApplicationRepository.ts
import { AppDataSource } from '../../../configs/app-data-source';
import { ApplicationEntity } from '../../entities/ApplicationEntity';

export const ApplicationRepository = AppDataSource.getRepository(ApplicationEntity);