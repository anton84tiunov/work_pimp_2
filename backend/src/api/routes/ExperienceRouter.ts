import express, { Request, Response } from 'express';
import {  createExperience, getAllExperiences } from '../controllers/experiences/ExperienceController';
import { ExperienceValidatorValidationRules } from '../utils/validators/experiences/ExperienceValidator';
import { validate } from '../utils/validators/Validator';

const UserRouter = express.Router();

UserRouter.post(
    '/create',
    ExperienceValidatorValidationRules(),
    validate,
    createExperience
  );

UserRouter.post('/get_all', getAllExperiences);

export default UserRouter;

