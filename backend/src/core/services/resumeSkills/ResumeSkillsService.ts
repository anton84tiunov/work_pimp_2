import logger from "../../../utils/logger";
import { ResumeSkillsEntity } from "../../entities/ResumeSkillsEntity";
import { ResumeSkillsRepository } from "../../repositories/ResumeSkillsRepository";

export class ResumeSkillsService {
    async createResumeSkill(resume_skill: ResumeSkillsEntity): Promise<ResumeSkillsEntity> {
        try {
            return await ResumeSkillsRepository.save(resume_skill);
        } catch (error) {
            throw error;
        }
    }

    async findAllResumeSkill(): Promise<ResumeSkillsEntity[]> {
        try {
            return await ResumeSkillsRepository.find();
        } catch (error) {
            throw error;
        }
    }
}