import { UserInterfase } from './UserInterfase';
/**
* интерфейс представляет язык, которым владеет пользователь. 
* Он содержит название языка и связь с пользователями, владеющими этим языком.
*/
export interface LanguageInterfase {
    /**
    * Уникальный идентификатор языка.
    */
    language_id: number;
    /**
    * Название языка.
    */
    name: string;
    /**
    * Массив пользователей, владеющих этим языком.
    */
    users?: UserInterfase[];
}