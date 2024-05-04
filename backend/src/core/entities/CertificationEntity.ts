import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity()
export class CertificationEntity {
    @PrimaryGeneratedColumn()
    certification_id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ type: 'date' })
    date_earned: Date;

    @ManyToOne(() => UserEntity, user => user.certifications)
    user: UserEntity;
}