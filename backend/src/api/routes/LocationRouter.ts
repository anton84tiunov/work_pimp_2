import express, { Request, Response } from 'express';
import {  createLocation, getAllLocations } from '../controllers/locations/LocationController';
import { LocationValidatorValidationRules } from '../utils/validators/locations/LocationValidator';
import { validate } from '../utils/validators/Validator';

const UserRouter = express.Router();

UserRouter.post(
    '/create',
    LocationValidatorValidationRules(),
    validate,
    createLocation
  );

UserRouter.post('/get_all', getAllLocations);

export default UserRouter;

