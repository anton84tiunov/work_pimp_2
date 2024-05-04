import express, { Request, Response } from 'express';
import {  createResume, getAllResume } from '../controllers/resumes/ResumesController';
import { ResumeValidatorValidationRules } from '../utils/validators/resumes/ResumeValidator';
import { validate } from '../utils/validators/Validator';

const ResumeRouter = express.Router();

ResumeRouter.post(
    '/create',
    ResumeValidatorValidationRules(),
    validate,
    createResume
  );
ResumeRouter.post('/get_all', getAllResume);

export default ResumeRouter;


