
import { Request, Response } from "express";
import { UserService } from "../../../core/services/users/UserService";
import { UserEntity } from "../../../core/entities/UserEntity";
import logger from "../../../utils/logger";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../../../utils/jwtHelper';
import redisSingleton from '../../../utils/redisHelper';
import Redis from 'ioredis';

const userService = new UserService();
export const createUser = async (req: Request, res: Response): Promise<void> => {

    try {
        const newUser = await userService.createUser(req.body as UserEntity);
        res.status(201).json(newUser);
    } catch (error) {
        logger.error(error.stack);
        if (error.code === 'ER_DUP_ENTRY') {
            logger.error(error);
            res.status(400).json({ error: 'Пользователь с таким email уже существует' });
        } else {
            logger.error(error);
            res.status(500).json({ error: 'Ошибка при создании пользователя' });
        }
        logger.error(error.stack);
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Ошибка при получении пользователей' });
    }
};

export const authenticateUser = async (req: Request, res: Response): Promise<void> => {
    const redis = new Redis();
    try {
        const { email, password } = req.body;
        const user = await userService.authenticateUser(email, password);
        if (!user.user) {
            console.log(user.error);
            res.status(400).json({ error: user.error });
        }else{
            const accessToken = generateAccessToken(user.user.user_id.toString());
            const refreshToken = generateRefreshToken(user.user.user_id.toString());
            const email = user.user.email;
            const id = user.user.user_id.toString()
            const dataToCache = { id: refreshToken };
            await redisSingleton.set(`user:${id}:refreshToken`, JSON.stringify(dataToCache), 3600); // Cache for 1 hour
            const cachedData = await redisSingleton.get(`user:${id}:refreshToken`);
            console.log(cachedData);
            res.json({ email, accessToken, refreshToken });
        }

        
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Ошибка при аутентификации пользователя' });
    }
};

export const refreshToken = async (req: Request, res: Response): Promise<void> => {
    const { refreshToken } = req.body;
  
    if (!refreshToken) {
      res.status(401).json({ error: 'Refresh token is missing' });
    } else {
      try {
        const payload = verifyRefreshToken(refreshToken);
        if (typeof payload === 'string') {
          // Обработка ошибки, если verifyRefreshToken вернула строку
          res.status(403).json({ error: payload });
        } else {
          const userId = payload.userId;
  
          const storedRefreshToken = await redisSingleton.get(`user:${userId}:refreshToken`);
  
          if (!storedRefreshToken || storedRefreshToken !== refreshToken) {
            res.status(403).json({ error: 'Invalid refresh token' });
          } else {
            const accessToken = generateAccessToken(userId);
  
            res.json({ accessToken });
          }
        }
      } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };




// import { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } from '../utils/jwt';
// import { storeRefreshToken, getRefreshToken } from '../utils/redis';

// // Маршрут для аутентификации пользователя
// app.post('/login', async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;

//     // Поиск пользователя по email
//     const user = await UserRepository.findOne({ where: { email } });
//     if (!user) {
//       return res.status(400).json({ error: 'Invalid email or password' });
//     }

//     // Проверка пароля
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ error: 'Invalid email or password' });
//     }

//     // Генерация access и refresh токенов
//     const accessToken = generateAccessToken(user.id.toString());
//     const refreshToken = generateRefreshToken(user.id.toString());

//     // Сохранение refresh токена в Redis
//     await storeRefreshToken(user.id.toString(), refreshToken);

//     res.json({ accessToken, refreshToken });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Маршрут для обновления access токена
// app.post('/refresh', async (req: Request, res: Response) => {
//   const { refreshToken } = req.body;

//   if (!refreshToken) {
//     return res.status(401).json({ error: 'Refresh token is missing' });
//   }

//   try {
//     // Проверка refresh токена
//     const payload = verifyRefreshToken(refreshToken);
//     const userId = payload.userId;

//     // Получение refresh токена из Redis
//     const storedRefreshToken = await getRefreshToken(userId.toString());

//     if (!storedRefreshToken || storedRefreshToken !== refreshToken) {
//       return res.status(403).json({ error: 'Invalid refresh token' });
//     }

//     // Генерация нового access токена
//     const accessToken = generateAccessToken(userId.toString());

//     res.json({ accessToken });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

