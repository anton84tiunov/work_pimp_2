import { Request, Response } from 'express';
import { ExperienceService } from '../../../core/services/experiences/ExperienceService';
import { ExperienceEntity } from '../../../core/entities/ExperienceEntity';
import logger from '../../../utils/logger';

const experienceService = new ExperienceService();

export const getAllExperiences = async (req: Request, res: Response) => {
  try {
    const experiences = await experienceService.getAllExperiences();
    res.status(200).json(experiences);
  } catch (error) {
    logger.error('Error getting experiences:', error);
    res.status(500).json({ error: 'Failed to get experiences' });
  }
};

export const createExperience = async (req: Request, res: Response) => {
  try {
    const experienceData: ExperienceEntity = req.body;
    const newExperience = await experienceService.createExperience(experienceData);
    res.status(201).json(newExperience);
  } catch (error) {
    logger.error('Error creating experience:', error);
    res.status(500).json({ error: 'Failed to create experience' });
  }
};