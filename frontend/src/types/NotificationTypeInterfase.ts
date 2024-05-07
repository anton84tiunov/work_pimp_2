import { NotificationInterfase } from './NotificationInterfase';
/**
* интерфейс представляет тип уведомления. Он содержит название типа уведомления и связь с уведомлениями этого типа.
*/
export interface NotificationTypeInterfase {
    /**
    * Уникальный идентификатор типа уведомления.
    */
    notification_type_id: number;
    /**
    * Название типа уведомления.
    */
    name: string;
    /**
    * Массив уведомлений этого типа.
    */
    notifications?: NotificationInterfase[];
}