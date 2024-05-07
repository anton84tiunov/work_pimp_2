import { Request, Response } from 'express';
import { LanguageService } from '../../../core/services/languages/LanguageService';
import { LanguageEntity } from '../../../core/entities/LanguageEntity';
import logger from '../../../utils/logger';

const languageService = new LanguageService();

export const getAllLanguages = async (req: Request, res: Response) => {
  try {
    const languages = await languageService.getAllLanguages();
    res.status(200).json(languages);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to get languages' });
  }
};

export const createLanguage = async (req: Request, res: Response) => {
  try {
    const languageData: LanguageEntity = req.body;
    const newLanguage = await languageService.createLanguage(languageData);
    res.status(201).json(newLanguage);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to create language' });
  }
};
