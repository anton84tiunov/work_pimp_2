import logger from '../../../utils/logger';
import { CertificationEntity } from '../../entities/CertificationEntity';
import { CertificationRepository } from '../../repositories/certifications/CertificationRepository';


export class CertificationService{
    async createCertification(certificationData: CertificationEntity): Promise<CertificationEntity> {
        try {
          return await CertificationRepository.save(certificationData);
        } catch (error) {
          logger.error(error.stack);
          console.error('Error creating certification:', error);
          throw new Error('Failed to create certification');
        }
  
    }

    async getAllCertifications(): Promise<CertificationEntity[]> {
        try {
          return await CertificationRepository.find({ relations: ['user'] });
        } catch (error) {
          logger.error(error.stack);
          console.error('Error getting all certifications:', error);
          throw new Error('Failed to get all certifications');
        }
    }
}

