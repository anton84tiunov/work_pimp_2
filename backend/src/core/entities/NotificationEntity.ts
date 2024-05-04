import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './UserEntity';
import { NotificationTypeEntity } from './NotificationTypeEntity';

@Entity()
export class NotificationEntity {
    @PrimaryGeneratedColumn()
    notification_id: number;

    @ManyToOne(() => UserEntity, user => user.notifications)
    user: UserEntity;

    @ManyToOne(() => NotificationTypeEntity, notificationType => notificationType.notifications)
    notificationType: NotificationTypeEntity;

    @Column({ length: 255 })
    message: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    sent_date: Date;
}










// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
// import { UserEntity } from "./UserEntity";

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

// @Entity({ name: "Notifications" })
// export class NotificationEntity {
    
//     @PrimaryGeneratedColumn({ name: "notification_id"})
//     notification_id: number;

//     @ManyToOne(() => UserEntity, user => user.user_id, { nullable: false })
//     @JoinColumn({ name: "user_id" })
//     user_id: UserEntity;

//     @Column({ type: "text", name: "message", nullable: true })
//     message: string;

//     @CreateDateColumn({ name: "created_at" })
//     created_at: Date;

//     @Column({ name: "is_read", type: "boolean", default: false, nullable: false })
//     is_read: boolean;
// }



