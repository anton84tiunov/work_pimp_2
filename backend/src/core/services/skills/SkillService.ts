import logger from "../../../utils/logger";
import { SkillEntity } from "../../entities/SkillEntity";
import { SkillRepository } from "../../repositories/skills/SkillRepository";

export class SkillService {
    async createSkill(skillData: SkillEntity): Promise<SkillEntity> {
        
        try {
            return await SkillRepository.save(skillData);
        } catch (err) {
            logger.error(err.stack);
            console.error('Error creating skill:', err);
            throw new Error('Failed to create skill');
        }
    }

    async getAllSkills(): Promise<SkillEntity[]> {
        try {
            return await SkillRepository.find({ relations: ['user'] });
        } catch (err) {
            logger.error(err.stack);
            console.error('Error getting all skills:', err);
            throw new Error('Failed to get all skills');
        }
    }
}