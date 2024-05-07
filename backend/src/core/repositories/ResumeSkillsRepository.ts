import { AppDataSource } from '../../configs/app-data-source';
import { ResumeSkillsEntity } from '../entities/ResumeSkillsEntity';

export const ResumeSkillsRepository = AppDataSource.manager.getRepository(ResumeSkillsEntity);





