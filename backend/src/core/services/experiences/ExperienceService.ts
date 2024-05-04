import logger from '../../../utils/logger';
import { ExperienceEntity } from '../../entities/ExperienceEntity';
import { ExperienceRepository } from '../../repositories/experiences/ExperienceRepository';

export class ExperienceService{
    async createExperience(experienceData: ExperienceEntity): Promise<ExperienceEntity> {
        try {
          return await ExperienceRepository.save(experienceData);
        } catch (error) {
          logger.error(error.stack);
          console.error('Error creating experience:', error);
          throw new Error('Failed to create experience');
        }
    }

    async getAllExperiences(): Promise<ExperienceEntity[]> {
        try {
          return await ExperienceRepository.find({ relations: ['user'] });
        } catch (error) {
          logger.error(error.stack);
          console.error('Error getting all experiences:', error);
          throw new Error('Failed to get all experiences');
        }
    }
}
