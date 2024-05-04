import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './UserEntity';
import { VacancyEntity } from './VacancyEntity';

@Entity()
export class ApplicationEntity {
    @PrimaryGeneratedColumn()
    application_id: number;

    @ManyToOne(() => UserEntity, user => user.applications)
    user: UserEntity;

    @ManyToOne(() => VacancyEntity, vacancy => vacancy.applications)
    vacancy: VacancyEntity;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    application_date: Date;
}

// напиши репозиторий сервис контроллер и роуты для навыков