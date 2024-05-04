import logger from "../../../utils/logger";
import { MatchEntity } from "../../entities/MatchEntity";
import { MatchRepository } from "../../repositories/matches/MatchRepository";

export class MatchService {
    async createMatch(matchData: MatchEntity): Promise<MatchEntity> {
        try {
            return await MatchRepository.save(matchData);
        } catch (err) {
            logger.error(err.stack);
            console.error('Error creating match:', err);
            throw new Error('Failed to create match');
        }
    }

    async getAllMatches(): Promise<MatchEntity[]> {
        try {
            return await MatchRepository.find({ relations: ['resume', 'vacancy'] });
        } catch (err) {
            logger.error(err.stack);
            console.error('Error getting all matches:', err);
            throw new Error('Failed to get all matches');
        }
    }
}