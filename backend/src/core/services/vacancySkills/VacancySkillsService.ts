import logger from "../../../utils/logger";
import { VacancySkillsEntity } from "../../entities/VacancySkillsEntity";
import { VacancySkillsRepository } from "../../repositories/VacancySkillsRepository";

export class VacancySkillsService {
    async createVacancySkill(vacancySkills: VacancySkillsEntity): Promise<VacancySkillsEntity> {
        try {
            return await VacancySkillsRepository.create(vacancySkills);
        } catch (error) {
            throw error;
        }
    }

    async findAllVacancySkill(): Promise<VacancySkillsEntity[]> {
        try {
            return await VacancySkillsRepository.find();
        } catch (error) {
            throw error;
        }
    }
}
