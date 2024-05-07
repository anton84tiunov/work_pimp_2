import logger from '../../../utils/logger';
import { ExperienceEntity } from '../../entities/ExperienceEntity';
import { ExperienceRepository } from '../../repositories/ExperienceRepository';

export class ExperienceService{
    async createExperience(experienceData: ExperienceEntity): Promise<ExperienceEntity> {
        try {
          return await ExperienceRepository.save(experienceData);
        } catch (error) {
          throw error;
        }
    }

    async getAllExperiences(): Promise<ExperienceEntity[]> {
        try {
          return await ExperienceRepository.find({ relations: ['user'] });
        } catch (error) {
          throw error;
        }
    }
}
