import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const EducationValidatorValidationRules = () => [
    body('name').notEmpty().withMessage('Имя обязательно'),
  ];
  
