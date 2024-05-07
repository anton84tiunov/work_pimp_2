import { UserInterfase } from './UserInterfase';
import { VacancyInterfase } from './VacancyInterfase';

/**
* интерфейс представляет заявку на вакансию, поданную пользователем. Он содержит информацию о дате 
* подачи заявки, а также связь с пользователем, подавшим заявку, и вакансией, на которую была подана заявка.
*/
export interface ApplicationInterfase {
    /**
    * Уникальный идентификатор заявки.
    */
    application_id: number;
    /**
    * Пользователь, подавший заявку.
    */
    user: UserInterfase;
    /**
    * Вакансия, на которую подана заявка.
    */
    vacancy: VacancyInterfase;
    /**
    * Дата подачи заявки.
    */
    application_date: Date;
}
