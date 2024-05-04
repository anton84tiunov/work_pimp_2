import { AppDataSource } from '../../../configs/app-data-source';
import { VacancyEntity } from '../../entities/VacancyEntity';

export const VacancyRepository = AppDataSource.manager.getRepository(VacancyEntity);



