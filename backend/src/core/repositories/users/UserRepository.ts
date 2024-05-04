import { AppDataSource } from '../../../configs/app-data-source';
import { UserEntity } from "../../entities/UserEntity";

export const UserRepository = AppDataSource.manager.getRepository(UserEntity);





