import { Request, Response } from 'express';
import { EducationService } from '../../../core/services/educations/EducationService';
import { EducationEntity } from '../../../core/entities/EducationEntity';
import logger from '../../../utils/logger';

const educationService = new EducationService();

export const createEducation = async (req: Request, res: Response): Promise<void> => {
  try {
    const newEducation = await educationService.createEducation(req.body as EducationEntity);
    res.status(201).json(newEducation);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Ошибка при создании образования' });
  }
};

export const getAllEducations = async (req: Request, res: Response): Promise<void> => {
  try {
    const educations = await educationService.getAllEducations();
    res.json(educations);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Ошибка при получении образований' });
  }
};