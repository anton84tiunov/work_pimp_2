import { ResumeInterfase } from './ResumeInterfase';
import { VacancyInterfase } from './VacancyInterfase';

/**
* интерфейс представляет совпадение между резюме и вакансией. Он содержит информацию об 
* оценке совпадения, статусе и связи с конкретным резюме и вакансией.
*/
export interface MatchInterfase {
    /**
    * Уникальный идентификатор совпадения.
    */
    match_id: number;
    /**
    * Резюме, связанное с совпадением.
    */
    resume: ResumeInterfase;
    /**
    * Вакансия, связанная с совпадением.
    */
    vacancy: VacancyInterfase;
    /**
    * Оценка совпадения между резюме и вакансией.
    */
    match_score: number;
    /**
    * Статус совпадения.
    */
    status: string;
}
