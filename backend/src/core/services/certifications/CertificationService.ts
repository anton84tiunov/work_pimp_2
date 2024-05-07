import logger from '../../../utils/logger';
import { CertificationEntity } from '../../entities/CertificationEntity';
import { CertificationRepository } from '../../repositories/CertificationRepository';


export class CertificationService{
    async createCertification(certificationData: CertificationEntity): Promise<CertificationEntity> {
        try {
          return await CertificationRepository.save(certificationData);
        } catch (error) {
          throw error;
        }
  
    }

    async getAllCertifications(): Promise<CertificationEntity[]> {
        try {
          return await CertificationRepository.find({ relations: ['user'] });
        } catch (error) {
          throw error;
        }
    }
}

