import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { NotificationEntity } from './NotificationEntity';

@Entity()
export class NotificationTypeEntity {
    @PrimaryGeneratedColumn()
    notification_type_id: number;

    @Column({ length: 50 })
    name: string;

    @OneToMany(() => NotificationEntity, notification => notification.notificationType)
    notifications: NotificationEntity[];
}