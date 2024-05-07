import { AppDataSource } from '../../configs/app-data-source';
import { ExperienceEntity } from '../entities/ExperienceEntity';

export const ExperienceRepository = AppDataSource.manager.getRepository(ExperienceEntity);


