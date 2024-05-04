import express, { Request, Response } from 'express';
import {  createUser, getAllUsers } from '../controllers/users/UserController';
import { userValidationRules } from '../utils/validators/users/UserValidator';
import { validate } from '../utils/validators/Validator';

const UserRouter = express.Router();

UserRouter.post(
    '/create',
    userValidationRules(),
    validate,
    createUser
  );

UserRouter.post('/get_all', getAllUsers);

export default UserRouter;

