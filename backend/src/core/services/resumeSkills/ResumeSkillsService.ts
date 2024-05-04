import logger from "../../../utils/logger";
import { ResumeSkillsEntity } from "../../entities/ResumeSkillsEntity";
import { ResumeSkillsRepository } from "../../repositories/resumeSkills/ResumeSkillsRepository";

export class ResumeSkillsService {
    async createResumeSkill(resume_skill: ResumeSkillsEntity): Promise<ResumeSkillsEntity> {
        try {
            return await ResumeSkillsRepository.save(resume_skill);
        } catch (err) {
            logger.error(err.stack);
            console.error('Error creating resume skill:', err);
            throw new Error('Failed to create resume skill');
        }
    }

    async findAllResumeSkill(): Promise<ResumeSkillsEntity[]> {
        try {
            return await ResumeSkillsRepository.find();
        } catch (err) {
            logger.error(err.stack);
            console.error('Error getting all resume skills:', err);
            throw new Error('Failed to get all resume skills');
        }
    }
}