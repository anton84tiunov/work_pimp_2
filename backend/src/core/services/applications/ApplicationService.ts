// ApplicationService.ts
import logger from '../../../utils/logger';
import { ApplicationEntity } from '../../entities/ApplicationEntity';
import { ApplicationRepository } from '../../repositories/applications/ApplicationRepository';

export class ApplicationService {
  async createApplication(applicationData: ApplicationEntity): Promise<ApplicationEntity> {
    try {
      return await ApplicationRepository.save(applicationData);
    } catch (error) {
      logger.error(error.stack);
      console.error('Error creating application:', error);
      throw new Error('Failed to create application');
    }
  }

  async getAllApplications(): Promise<ApplicationEntity[]> {
    try {
      return await ApplicationRepository.find({ relations: ['user', 'vacancy'] });
    } catch (error) {
      logger.error(error.stack);
      console.error('Error getting all applications:', error);
      throw new Error('Failed to get all applications');
    }
  }

  // Другие методы для работы с заявками (update, delete, etc.)
}