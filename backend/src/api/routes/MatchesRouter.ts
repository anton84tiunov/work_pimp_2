import express, { Request, Response } from 'express';
import {  createMatch, getAllMatches } from '../controllers/matches/MatchesController';
import { MatchValidatorValidationRules } from '../utils/validators/matches/MatchValidator';
import { validate } from '../utils/validators/Validator';

const MatchRouter = express.Router();

MatchRouter.post(
    '/create',
    MatchValidatorValidationRules(),
    validate,
    createMatch
  );
MatchRouter.post('/get_all', getAllMatches);

export default MatchRouter;
