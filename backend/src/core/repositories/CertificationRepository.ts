import { AppDataSource } from '../../configs/app-data-source';
import { CertificationEntity } from '../entities/CertificationEntity';

export const CertificationRepository = AppDataSource.getRepository(CertificationEntity);




