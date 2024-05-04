import logger from '../../../utils/logger';
import { EducationEntity } from '../../entities/EducationEntity';
import { EducationRepository } from '../../repositories/educations/EducationRepository';

export class EducationService{
    async createEducation(educationData: EducationEntity): Promise<EducationEntity> {
        try {
          return await EducationRepository.save(educationData);
        } catch (error) {
          logger.error(error.stack);
          console.error('Error creating education:', error);
          throw new Error('Failed to create education');
        }
    }

    async getAllEducations(): Promise<EducationEntity[]> {
        try {
          return await EducationRepository.find({ relations: ['user'] });
        } catch (error) {
          logger.error(error.stack);
          console.error('Error getting all educations:', error);
          throw new Error('Failed to get all educations');
        }
    }
}
