import bcrypt, { compare } from 'bcrypt';
import { UserRepository } from "../../repositories/UserRepository";
import { UserEntity } from "../../entities/UserEntity";
import logger from "../../../utils/logger";
import { AuthenticationResult } from '../../../types/user';


// Секретный ключ для хеширования паролей
const SECRET_KEY = 'your-secret-key-here';

/**
 * Класс UserService предоставляет методы для работы с таблицей  Users в базе данных
 */
export class UserService {

        /**
     * Создает нового пользователя
     */
        async createUser(userData: UserEntity): Promise<UserEntity> {
        try {
            // 1. Генерируем соль с высокой стоимостью (например, 12)
            const salt = await bcrypt.genSalt(12);
            // 2. Хешируем пароль с использованием сгенерированной соли и секретного ключа
            const hashedPassword = await bcrypt.hash(userData.password + SECRET_KEY, salt);
            // 3. Заменяем исходный пароль на захешированный
            userData.password = hashedPassword;
            // 4. Сохраняем пользователя с захешированным паролем
            return await UserRepository.save(userData);
        } catch (error) {
            throw error;
        }
    }

        /**
     * Получает список всех пользователей
     */
    async getAllUsers(): Promise<UserEntity[]> {
        try {
            return await UserRepository.find();
        } catch (error) {
            throw error;
        }
    }

        /**
     * Получает пользователя по email
     */
    async getUserByEmail(email: string): Promise<UserEntity> {
        try {
            return await UserRepository.findOne({
                where: { email }
            });
        } catch (error) {
            throw error;
        }
    }
    async authenticateUser(email: string, password: string): Promise<AuthenticationResult> {
        try {
            const user = await UserRepository.findOne({ where: { email } });
    
            if (!user) {
                return { success: false, error: 'Пользователь не найден' };
            }
            // Добавляем секретный ключ к введенному паролю перед сравнением
            const isPasswordValid = await bcrypt.compare(password + SECRET_KEY, user.password);
            if (!isPasswordValid) {
                return { success: false, error: 'Неверный пароль' };
            }
            // 8. Не возвращайте пароль пользователя
            // const { password: _, ...userWithoutPassword } = user;
            return { success: true, user: user }
        } catch (error) {
            throw error;
        }
    }

    
    
    
    
    
}





