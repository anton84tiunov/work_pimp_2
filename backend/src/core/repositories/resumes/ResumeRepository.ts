import { AppDataSource } from '../../../configs/app-data-source';
import { ResumeEntity } from '../../entities/ResumeEntity';

export const ResumeRepository = AppDataSource.manager.getRepository(ResumeEntity);




