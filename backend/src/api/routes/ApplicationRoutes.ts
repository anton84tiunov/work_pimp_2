import express, { Request, Response } from 'express';
import {  createApplication, getAllApplications } from '../controllers/applications/ApplicationController';
import { ApplicationValidatorValidationRules } from '../utils/validators/applications/ApplicationValidator';
import { validate } from '../utils/validators/Validator';

const UserRouter = express.Router();

UserRouter.post(
    '/create',
    ApplicationValidatorValidationRules(),
    validate,
    createApplication
  );

UserRouter.post('/get_all', getAllApplications);

export default UserRouter;

