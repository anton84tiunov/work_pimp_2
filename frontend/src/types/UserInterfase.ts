import { ResumeInterfase } from './ResumeInterfase';
import { SkillInterfase } from './SkillInterfase';
import { VacancyInterfase } from './VacancyInterfase';
import { NotificationInterfase } from './NotificationInterfase';
import { LocationInterfase } from './LocationInterfase';
import { EducationInterfase } from './EducationInterfase';
import { ExperienceInterfase } from './ExperienceInterfase';
import { LanguageInterfase } from './LanguageInterfase';
import { CertificationInterfase } from './CertificationInterfase';
import { ApplicationInterfase } from './ApplicationInterfase';

/**
 * интерфейс определяет структуру данных для пользователя. Он содержит основную информацию о пользователе, 
 * такую как имя, фамилия, электронная почта и пароль, а также необязательные связи с резюме, навыками, 
 * вакансиями, уведомлениями, местоположением, образованием, опытом работы, языками, сертификатами и заявками.
*/
export interface UserInterfase {
    /**
    * Уникальный идентификатор пользователя.
    */
    user_id: number;
    /**
    * Имя пользователя.
    */
    name: string;
    /**
    * Фамилия пользователя.
    */
    surname: string;
    /**
    * Электронная почта пользователя.
    */
    email: string;
    /**
    * Пароль пользователя.
    */
    password: string;
    /**
    * Флаг, указывающий, заполнил ли пользователь свой профиль.
    */
    completed: boolean;
    /**
    * массив резюме пользователя.
    */
    resumes?: ResumeInterfase[];
    /**
    * массив навыков пользователя.
    */
    skills?: SkillInterfase[];
    /**
    * массив вакансий, созданных пользователем.
    */
    vacancies?: VacancyInterfase[];
    /**
    * массив уведомлений пользователя.
    */
    notifications?: NotificationInterfase[];
    /**
    * местоположение пользователя.
    */
    location?: LocationInterfase;
    /**
    * образование пользователя.
    */
    education?: EducationInterfase;
    /**
    * опыт работы пользователя.
    */
    experience?: ExperienceInterfase;
    /**
    * массив языков, которыми владеет пользователь.
    */
    languages?: LanguageInterfase[];
    /**
    * массив сертификатов пользователя.
    */
    certifications?: CertificationInterfase[];
    /**
    * массив заявок, поданных пользователем.
    */
    applications?: ApplicationInterfase[];
    
}



