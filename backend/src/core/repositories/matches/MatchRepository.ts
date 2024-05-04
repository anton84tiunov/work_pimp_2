import { AppDataSource } from '../../../configs/app-data-source';
import { MatchEntity } from '../../entities/MatchEntity';

export const MatchRepository = AppDataSource.manager.getRepository(MatchEntity);

