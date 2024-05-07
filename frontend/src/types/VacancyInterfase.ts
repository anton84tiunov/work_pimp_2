import { UserInterfase } from './UserInterfase';
import { VacancySkillsInterfase } from './VacancySkillsInterfase';
import { MatchInterfase } from './MatchInterfase';
import { LocationInterfase } from './LocationInterfase';
import { ApplicationInterfase } from './ApplicationInterfase';

/**
* интерфейс представляет вакансию, созданную пользователем. Он содержит информацию о названии, описании, 
* требуемых навыках, местоположении, а также связи с пользователем, создавшим вакансию, совпадениями с 
* резюме и заявками на эту вакансию.
*/
export interface VacancyInterfase {
    /**
    * Уникальный идентификатор вакансии.
    */
    vacancy_id: number;
    /**
    * Пользователь, создавший вакансию.
    */
    user: UserInterfase;
    /**
    * Название вакансии.
    */
    title: string;
    /**
    * Описание вакансии.
    */
    description: string;
    /**
    * Массив требуемых навыков для вакансии.
    */
    skills?: VacancySkillsInterfase[];
    /**
    * Массив совпадений между резюме и вакансией.
    */
    matches?: MatchInterfase[];
    /**
    * Местоположение вакансии.
    */
    location?: LocationInterfase;
    /**
    * Массив заявок на вакансию.
    */
    applications?: ApplicationInterfase[];
}
