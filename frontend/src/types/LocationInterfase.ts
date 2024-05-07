import { UserInterfase } from './UserInterfase';
import { VacancyInterfase } from './VacancyInterfase';
/**
* интерфейс определяет местоположение, которое может быть связано с пользователями и вакансиями.
*/
export interface LocationInterfase {
    /**
    * Уникальный идентификатор местоположения.
    */
    location_id: number;
    /**
    * Город.
    */
    city: string;
    /**
    * Страна.
    */
    country: string;
    /**
    * Массив пользователей, связанных с этим местоположением.
    */
    users?: UserInterfase[];
    /**
    * Массив вакансий, связанных с этим местоположением.
    */
    vacancies?: VacancyInterfase[];
}