import logger from '../../../utils/logger';
import { LanguageEntity } from '../../entities/LanguageEntity';
import { LanguageRepository } from '../../repositories/languages/LanguageRepository';

export class LanguageService{
    async createLanguage(languageData: LanguageEntity): Promise<LanguageEntity> {
        try {
          return await LanguageRepository.save(languageData);
        } catch (error) {
          logger.error(error.stack);
          console.error('Error creating language:', error);
          throw new Error('Failed to create language');
        }
    }

    async getAllLanguages(): Promise<LanguageEntity[]> {
        try {
          return await LanguageRepository.find({ relations: ['users'] });
        } catch (error) {
          logger.error(error.stack);
          console.error('Error getting all languages:', error);
          throw new Error('Failed to get all languages');
        }
    }
}
