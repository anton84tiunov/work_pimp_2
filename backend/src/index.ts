import "reflect-metadata";
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { AppDataSource } from './configs/app-data-source';
import MainRouter from './api/routes/MainRouter'; // Исправленный импорт
import logger from './utils/logger';
import errorHandler from "./utils/errorHandler";



async function startServer() {
    try {
        await AppDataSource.initialize(); // Инициализируем источник данных
        console.log('Источник данных успешно инициализирован');
        logger.info('Источник данных успешно инициализирован');

        const app = express();

        app.use(helmet());
        app.use(cors());
        app.use(compression());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        // app.use(morgan('combined', { stream: logger.stream }));
        

        // app.use((req, res, next) => {
        //     res.header('Access-Control-Allow-Origin', '*'); // Замените * на домен вашего приложения React в продакшн среде
        //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        //     next();
        //   });
          
        // Использование маршрутов
        app.use('/api', MainRouter);

        // Error handling
app.use(errorHandler); // Обработчик ошибок
     
   
        const port = 5000;
        app.listen(port, () => {
            console.log(`Сервер запущен на порту ${port}`);
        });
    } catch (error) {
        console.error('Ошибка инициализации источника данных:', error);
    }
}

startServer(); // Запускаем сервер


