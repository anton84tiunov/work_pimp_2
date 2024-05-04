import { AppDataSource } from '../../../configs/app-data-source';
import { VacancySkillsEntity } from '../../entities/VacancySkillsEntity';

export const VacancySkillsRepository = AppDataSource.manager.getRepository(VacancySkillsEntity);


