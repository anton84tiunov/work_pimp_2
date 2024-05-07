import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const userValidationRules = () => [
  body('name').notEmpty().withMessage('Имя обязательно'),
  body('surname').notEmpty().withMessage('Фамилия обязательно'),
  body('email').isEmail().withMessage('Некорректный email'),
  body('password').isLength({ min: 8 }).withMessage('Пароль должен быть не менее 8 символов'),
];

export const userDyEmailValidationRules = () => [
  body('email').isEmail().withMessage('Некорректный email'),
  body('password').isLength({ min: 8 }).withMessage('Пароль должен быть не менее 8 символов'),
]


