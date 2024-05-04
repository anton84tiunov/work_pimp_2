import express, { Request, Response } from 'express';
import {  createResumeSkills, getAllResumeSkills } from '../controllers/resumeSkills/ResumeSkillsController';
import { ResumeSkillsValidatorValidationRules } from '../utils/validators/resumeSkills/ResumeSkillsValidator';
import { validate } from '../utils/validators/Validator';

const ResumeSkillsRouter = express.Router();

ResumeSkillsRouter.post(
    '/create',
    ResumeSkillsValidatorValidationRules(),
    validate,
);

ResumeSkillsRouter.post('/get_all', getAllResumeSkills);

export default ResumeSkillsRouter;


