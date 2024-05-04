import logger from "../../../utils/logger";
import { ResumeEntity } from "../../entities/ResumeEntity";
import { ResumeRepository } from "../../repositories/resumes/ResumeRepository";

export class ResumeService {
    async createResume(resume: ResumeEntity): Promise<ResumeEntity> {
        try {
            return await ResumeRepository.save(resume);
        } catch (err) {
            logger.error(err.stack);
            console.error('Error creating resume:', err);
            throw new Error('Failed to create resume');
        }
    }

    async findAllResumes(): Promise<ResumeEntity[]> {
        try {
            return await ResumeRepository.find();
        } catch (err) {
            logger.error(err.stack);
            console.error('Error getting all resumes:', err);
            throw new Error('Failed to get all resumes');
        }
    }
}


