// ApplicationService.ts
import logger from '../../../utils/logger';
import { ApplicationEntity } from '../../entities/ApplicationEntity';
import { ApplicationRepository } from '../../repositories/ApplicationRepository';

export class ApplicationService {
  async createApplication(applicationData: ApplicationEntity): Promise<ApplicationEntity> {
    try {
      return await ApplicationRepository.save(applicationData);
    } catch (error) {
      throw error;
    }
  }

  async getAllApplications(): Promise<ApplicationEntity[]> {
    try {
      return await ApplicationRepository.find({ relations: ['user', 'vacancy'] });
    } catch (error) {
      throw error;
    }
  }

  // Другие методы для работы с заявками (update, delete, etc.)
}