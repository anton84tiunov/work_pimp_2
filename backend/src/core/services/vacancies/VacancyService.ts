import logger from "../../../utils/logger";
import { VacancyEntity } from "../../entities/VacancyEntity";
import { VacancyRepository } from "../../repositories/vacancies/VacancyRepository";

export class VacancyService {
    async createVacancy(vacancy: VacancyEntity): Promise<VacancyEntity> {
        try {
            return await VacancyRepository.create(vacancy);
        } catch (err) {
            logger.error(err.stack);
            console.error('Error creating vacancy:', err);
            throw new Error('Failed to create vacancy');
        }
    }

    async findAllVacancy(): Promise<VacancyEntity[]> {
        try {
            return await VacancyRepository.find();
        } catch (err) {
            logger.error(err.stack);
            console.error('Error finding vacancies:', err);
            throw new Error('Failed to find vacancies');
        }
    }
}


