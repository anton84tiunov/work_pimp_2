import express, { Request, Response } from 'express';
import {  createLanguage, getAllLanguages } from '../controllers/languages/LanguageController';
import { LanguageValidatorValidationRules } from '../utils/validators/languages/LanguageValidator';
import { validate } from '../utils/validators/Validator';

const UserRouter = express.Router();

UserRouter.post(
    '/create',
    LanguageValidatorValidationRules(),
    validate,
    createLanguage
  );

UserRouter.post('/get_all', getAllLanguages);

export default UserRouter;

