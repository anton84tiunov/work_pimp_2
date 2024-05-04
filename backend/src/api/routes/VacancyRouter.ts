import express, { Request, Response } from 'express';
import {  createVacancy, getAllVacancies } from '../controllers/vacancies/VacancyController';
import { SkillValidatorValidationRules } from '../utils/validators/skills/SkillValidator';
import { validate } from '../utils/validators/Validator';

const VacancyRouter = express.Router();

VacancyRouter.post(
    '/create',
    SkillValidatorValidationRules(),
    validate,
    createVacancy
  );
VacancyRouter.post('/get_all', getAllVacancies);

export default VacancyRouter;


