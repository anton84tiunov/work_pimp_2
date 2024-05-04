import { UserRepository } from "../../repositories/users/UserRepository";
import { UserEntity } from "../../entities/UserEntity";
import logger from "../../../utils/logger";

export class UserService {

    async createUser(userData: UserEntity): Promise<UserEntity> {
        try {
            console.log(userData);
            return await UserRepository.save(userData);
        } catch (err) {
            logger.error(err.stack);
            console.error('Error creating user:', err);
            throw new Error('Failed to create user');
        }
    }

    async getAllUsers(): Promise<UserEntity[]> {
        try {
            return await UserRepository.find();
        } catch (err) {
            logger.error(err.stack);
            console.error('Error getting all users:', err);
            throw new Error('Failed to get all users');
        }
    }
}





