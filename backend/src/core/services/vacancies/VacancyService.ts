import logger from "../../../utils/logger";
import { VacancyEntity } from "../../entities/VacancyEntity";
import { VacancyRepository } from "../../repositories/VacancyRepository";

export class VacancyService {
    async createVacancy(vacancy: VacancyEntity): Promise<VacancyEntity> {
        try {
            return await VacancyRepository.create(vacancy);
        } catch (error) {
            throw error;
        }
    }

    async findAllVacancy(): Promise<VacancyEntity[]> {
        try {
            return await VacancyRepository.find();
        } catch (error) {
            throw error;
        }
    }
}


