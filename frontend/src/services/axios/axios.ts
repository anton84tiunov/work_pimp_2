import axios from 'axios';

// Создаем экземпляр Axios с базовыми настройками
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Базовый URL для всех запросов
  withCredentials: true, // Глобально включаем передачу HTTP-кук
});

export default axiosInstance;