import { UserInterfase } from './UserInterfase';
import { NotificationTypeInterfase } from './NotificationTypeInterfase';

/**
* интерфейс определяет структуру уведомления, которое может быть отправлено пользователю. Он содержит 
* информацию о типе уведомления, сообщении и дате отправки, а также связь с пользователем, получившим уведомление.
*/
export interface NotificationInterfase {
    /**
    * Уникальный идентификатор уведомления.
    */
    notification_id: number;
    /**
    * Пользователь, получивший уведомление.
    */
    user: UserInterfase;
    /**
    * Тип уведомления.
    */
    notificationType: NotificationTypeInterfase;
    /**
    * Текст уведомления.
    */
    message: string;
    /**
    * Дата отправки уведомления.
    */
    sent_date: Date;
}










// import { Interfase, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
// import { UserInterfase } from "./UserInterfase";

// // Таблица Уведомлений (Notifications):
// // Эта таблица будет хранить информацию о созданных уведомлениях для пользователей.
// // sql
// // Copy code
// // CREATE TABLE Notifications (
// //     notification_id INT PRIMARY KEY AUTO_INCREMENT,
// //     user_id INT,
// //     message TEXT,
// //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// //     is_read BOOLEAN DEFAULT FALSE,
// //     FOREIGN KEY (user_id) REFERENCES Users(user_id)
// // );
// // В этой таблице notification_id - уникальный идентификатор уведомления, user_id - идентификатор пользователя, которому предназначено уведомление, message - текст уведомления, created_at - дата создания уведомления, is_read - флаг, указывающий, прочитано 
// // ли уведомление.

// @Interfase({ name: "Notifications" })
// export class NotificationInterfase {
    
//     @PrimaryGeneratedColumn({ name: "notification_id"})
//     notification_id: number;

//     @ManyToOne(() => UserInterfase, user => user.user_id, { nullable: false })
//     @JoinColumn({ name: "user_id" })
//     user_id: UserInterfase;

//     @Column({ type: "text", name: "message", nullable: true })
//     message: string;

//     @CreateDateColumn({ name: "created_at" })
//     created_at: Date;

//     @Column({ name: "is_read", type: "boolean", default: false, nullable: false })
//     is_read: boolean;
// }



