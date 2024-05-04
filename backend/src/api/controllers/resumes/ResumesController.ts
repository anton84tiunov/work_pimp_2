import { Request, Response } from "express";
import { ResumeService } from "../../../core/services/resumes/ResumeService";
import { ResumeEntity } from "../../../core/entities/ResumeEntity";
import logger from "../../../utils/logger";

const resumeService = new ResumeService();

export const createResume = async (req: Request, res: Response): Promise<void> => {
    try {
        const newResumeData: ResumeEntity = req.body;
        const newResume = await resumeService.createResume(newResumeData);
        res.json(newResume);
    } catch (error) {
        logger.error(error.stack);
        console.error('Ошибка при создании совпадения:', error);
        res.status(500).json({ error: 'Ошибка при создании совпадения' });
    }
}

export const getAllResume = async (req: Request, res: Response): Promise<void> => {
    try {
        const resume = await resumeService.findAllResumes();
        res.json(resume);
    } catch (error) {
        logger.error(error.stack);
        console.error('Ошибка при получении совпадений:', error);
        res.status(500).json({ error: 'Ошибка при получении совпадений' });
    }
}
