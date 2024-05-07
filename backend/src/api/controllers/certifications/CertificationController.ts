import { Request, Response } from 'express';
import { CertificationService } from '../../../core/services/certifications/CertificationService';
import { CertificationEntity } from '../../../core/entities/CertificationEntity';
import logger from '../../../utils/logger';

const certificationService = new CertificationService();

export const createCertification = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCertification = await certificationService.createCertification(req.body as CertificationEntity);
    res.status(201).json(newCertification);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Ошибка при создании сертификата' });
  }
};

export const getAllCertifications = async (req: Request, res: Response): Promise<void> => {
  try {
    const certifications = await certificationService.getAllCertifications();
    res.json(certifications);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Ошибка при получении сертификатов' });
  }
};



