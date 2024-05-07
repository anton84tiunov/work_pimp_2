import { AppDataSource } from '../../configs/app-data-source';
import { EducationEntity } from '../entities/EducationEntity';

export const EducationRepository = AppDataSource.getRepository(EducationEntity);

