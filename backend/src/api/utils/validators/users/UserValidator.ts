import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const userValidationRules = () => [
  body('name').notEmpty().withMessage('Имя обязательно'),
  body('email').isEmail().withMessage('Некорректный email'),
  body('password').isLength({ min: 6 }).withMessage('Пароль должен быть не менее 6 символов'),
];

