import express, { Request, Response } from 'express';
import {  createSkill, getAllSkills } from '../controllers/skills/SkillController';
import { SkillValidatorValidationRules } from '../utils/validators/skills/SkillValidator';
import { validate } from '../utils/validators/Validator';

const SkillRouter = express.Router();

SkillRouter.post(
    '/create',
    SkillValidatorValidationRules(),
    validate,
    createSkill
  );
SkillRouter.post('/get_all', getAllSkills);

export default SkillRouter;


