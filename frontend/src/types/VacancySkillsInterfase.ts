import { VacancyInterfase } from './VacancyInterfase';
import { SkillInterfase } from './SkillInterfase';

/**
* интерфейс определяет связь между вакансией и требуемым навыком. Он связывает конкретную вакансию с необходимым 
* для нее навыком.
*/
export interface VacancySkillsInterfase {
    /**
    * Уникальный идентификатор связи между вакансией и навыком.
    */
    vacancy_skill_id: number;
    /**
    * Вакансия, связанная с навыком.
    */
    vacancy: VacancyInterfase;
    /**
    * Навык, требуемый для вакансии.
    */
    skill: SkillInterfase;
}



