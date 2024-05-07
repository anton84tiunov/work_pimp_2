import { ResumeInterfase } from './ResumeInterfase';
import { SkillInterfase } from './SkillInterfase';

/**
* интерфейс определяет связь между резюме и навыками. Он связывает резюме с конкретными навыками, которыми обладает пользователь.
*/
export interface ResumeSkillsInterfase {
    /**
    * Уникальный идентификатор связи между резюме и навыком.
    */
    resume_skill_id: number;
    /**
    * Резюме, связанное с навыком.
    */
    resume: ResumeInterfase;
    /**
    * Навык, связанный с резюме.
    */
    skill: SkillInterfase;
}

