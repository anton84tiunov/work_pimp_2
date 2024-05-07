import logger from "../../../utils/logger";
import { ResumeEntity } from "../../entities/ResumeEntity";
import { ResumeRepository } from "../../repositories/ResumeRepository";

export class ResumeService {
    async createResume(resume: ResumeEntity): Promise<ResumeEntity> {
        try {
            return await ResumeRepository.save(resume);
        } catch (error) {
            throw error;
        }
    }

    async findAllResumes(): Promise<ResumeEntity[]> {
        try {
            return await ResumeRepository.find();
        } catch (error) {
            throw error;
        }
    }
}


