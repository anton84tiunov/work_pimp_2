import logger from '../../../utils/logger';
import { EducationEntity } from '../../entities/EducationEntity';
import { EducationRepository } from '../../repositories/EducationRepository';

export class EducationService{
    async createEducation(educationData: EducationEntity): Promise<EducationEntity> {
        try {
          return await EducationRepository.save(educationData);
        } catch (error) {
          throw error;
        }
    }

    async getAllEducations(): Promise<EducationEntity[]> {
        try {
          return await EducationRepository.find({ relations: ['user'] });
        } catch (error) {
          throw error;
        }
    }
}
