import express, { Request, Response } from 'express';
import {  createVacancySkills, getAllVacancySkills } from '../controllers/vacancySkills/VacancySkillsController';
import { VacancySkillsValidatorValidationRules } from '../utils/validators/vacancySkills/VacancySkillsValidator';
import { validate } from '../utils/validators/Validator';

const VacancySkillsRouter = express.Router();

VacancySkillsRouter.post(
    '/create',
    VacancySkillsValidatorValidationRules(),
    validate,
    createVacancySkills
  );
VacancySkillsRouter.post('/get_all', getAllVacancySkills);

export default VacancySkillsRouter;


