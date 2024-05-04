import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserEntity } from './UserEntity';
import { VacancyEntity } from './VacancyEntity';

@Entity()
export class LocationEntity {
    @PrimaryGeneratedColumn()
    location_id: number;

    @Column({ length: 100 })
    city: string;

    @Column({ length: 100 })
    country: string;

    @OneToMany(() => UserEntity, user => user.location)
    users: UserEntity[];

    @OneToMany(() => VacancyEntity, vacancy => vacancy.location)
    vacancies: VacancyEntity[];
}