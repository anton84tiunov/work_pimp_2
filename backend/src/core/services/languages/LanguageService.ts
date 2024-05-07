import logger from '../../../utils/logger';
import { LanguageEntity } from '../../entities/LanguageEntity';
import { LanguageRepository } from '../../repositories/LanguageRepository';

export class LanguageService{
    async createLanguage(languageData: LanguageEntity): Promise<LanguageEntity> {
        try {
          return await LanguageRepository.save(languageData);
        } catch (error) {
          throw error;
        }
    }

    async getAllLanguages(): Promise<LanguageEntity[]> {
        try {
          return await LanguageRepository.find({ relations: ['users'] });
        } catch (error) {
          throw error;
        }
    }
}
