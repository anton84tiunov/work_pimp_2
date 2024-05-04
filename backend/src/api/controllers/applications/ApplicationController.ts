// ApplicationController.ts
import { Request, Response } from 'express';
import { ApplicationService } from '../../../core/services/applications/ApplicationService';
import { ApplicationEntity } from '../../../core/entities/ApplicationEntity'; 
import logger from '../../../utils/logger';

const applicationService = new ApplicationService();

export const createApplication = async (req: Request, res: Response): Promise<void> => {
  try {
    const newApplication = await applicationService.createApplication(req.body as ApplicationEntity);
    res.status(201).json(newApplication);
  } catch (error) {
    logger.error(error.stack);
    console.error('Ошибка при создании заявки:', error);
    res.status(500).json({ error: 'Ошибка при создании заявки' });
  }
};

export const getAllApplications = async (req: Request, res: Response): Promise<void> => {
  try {
    const applications = await applicationService.getAllApplications();
    res.json(applications);
  } catch (error) {
    logger.error(error.stack);
    console.error('Ошибка при получении заявок:', error);
    res.status(500).json({ error: 'Ошибка при получении заявок' });
  }
};

// git clone https://github.com/anton84tiunov/express-work_pimp_2.git