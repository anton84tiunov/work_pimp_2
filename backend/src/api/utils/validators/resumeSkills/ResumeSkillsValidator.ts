import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const ResumeSkillsValidatorValidationRules = () => [
    body('name').notEmpty().withMessage('Имя обязательно'),
  ];


