import { Request, Response } from "express";
import { MatchService } from "../../../core/services/matches/MatchService";
import { MatchEntity } from "../../../core/entities/MatchEntity";
import logger from "../../../utils/logger";

const matchService = new MatchService();

export const createMatch = async (req: Request, res: Response): Promise<void> => {
    try {
        const newMatchData: MatchEntity = req.body;
        const newMatch = await matchService.createMatch(newMatchData);
        res.json(newMatch);
    } catch (error) {
        logger.error(error.stack);
        console.error('Ошибка при создании совпадения:', error);
        res.status(500).json({ error: 'Ошибка при создании совпадения' });
    }
}

export const getAllMatches = async (req: Request, res: Response): Promise<void> => {
    try {
        const matches = await matchService.getAllMatches();
        res.json(matches);
    } catch (error) {
        logger.error(error.stack);
        console.error('Ошибка при получении совпадений:', error);
        res.status(500).json({ error: 'Ошибка при получении совпадений' });
    }
}
