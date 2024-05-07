import { AppDataSource } from '../../configs/app-data-source';
import { SkillEntity } from '../entities/SkillEntity';

export const SkillRepository = AppDataSource.manager.getRepository(SkillEntity);








