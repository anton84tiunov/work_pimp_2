import logger from "../../../utils/logger";
import { MatchEntity } from "../../entities/MatchEntity";
import { MatchRepository } from "../../repositories/MatchRepository";

export class MatchService {
    async createMatch(matchData: MatchEntity): Promise<MatchEntity> {
        try {
            return await MatchRepository.save(matchData);
        } catch (error) {
            throw error;
        }
    }

    async getAllMatches(): Promise<MatchEntity[]> {
        try {
            return await MatchRepository.find({ relations: ['resume', 'vacancy'] });
        } catch (error) {
            throw error;
        }
    }
}