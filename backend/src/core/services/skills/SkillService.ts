import logger from "../../../utils/logger";
import { SkillEntity } from "../../entities/SkillEntity";
import { SkillRepository } from "../../repositories/SkillRepository";

export class SkillService {
    async createSkill(skillData: SkillEntity): Promise<SkillEntity> {
        
        try {
            return await SkillRepository.save(skillData);
        } catch (error) {
            throw error;
        }
    }

    async getAllSkills(): Promise<SkillEntity[]> {
        try {
            return await SkillRepository.find({ relations: ['user'] });
        } catch (error) {
            throw error;
        }
    }
}