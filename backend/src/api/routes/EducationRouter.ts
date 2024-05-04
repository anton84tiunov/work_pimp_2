import express, { Request, Response } from 'express';
import { createEducation, getAllEducations } from '../controllers/educations/EducationController';
import { userValidationRules } from '../utils/validators/users/UserValidator';
import { validate } from '../utils/validators/Validator';

const UserRouter = express.Router();

UserRouter.post(
    '/create',
    userValidationRules(),
    validate,
    createEducation
  );

UserRouter.post('/get_all', getAllEducations);

export default UserRouter;

