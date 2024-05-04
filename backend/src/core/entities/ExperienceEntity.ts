import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity()
export class ExperienceEntity {
    @PrimaryGeneratedColumn()
    experience_id: number;

    @Column({ length: 100 })
    company: string;

    @Column({ length: 100 })
    position: string;

    @Column({ type: 'date' })
    start_date: Date;

    @Column({ type: 'date', nullable: true })
    end_date: Date;

    @OneToMany(() => UserEntity, user => user.experience)
    users: UserEntity[];
}