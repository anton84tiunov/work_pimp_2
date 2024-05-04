import logger from "../../../utils/logger";
import { VacancySkillsEntity } from "../../entities/VacancySkillsEntity";
import { VacancySkillsRepository } from "../../repositories/vacancySkills/VacancySkillsRepository";

export class VacancySkillsService {
    async createVacancySkill(vacancySkills: VacancySkillsEntity): Promise<VacancySkillsEntity> {
        try {
            return await VacancySkillsRepository.create(vacancySkills);
        } catch (err) {
            logger.error(err.stack);
            console.error('Error creating vacancy skill:', err);
            throw new Error('Failed to create vacancy skill');
        }
    }

    async findAllVacancySkill(): Promise<VacancySkillsEntity[]> {
        try {
            return await VacancySkillsRepository.find();
        } catch (err) {
            logger.error(err.stack);
            console.error('Error finding vacancy skills:', err);
            throw new Error('Failed to find vacancy skills');
        }
    }
}
