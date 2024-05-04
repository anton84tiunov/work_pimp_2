import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from './UserEntity';
import { VacancySkillsEntity } from './VacancySkillsEntity';
import { MatchEntity } from './MatchEntity';
import { LocationEntity } from './LocationEntity';
import { ApplicationEntity } from './ApplicationEntity';

@Entity()
export class VacancyEntity {
    @PrimaryGeneratedColumn()
    vacancy_id: number;

    @ManyToOne(() => UserEntity, user => user.vacancies)
    user: UserEntity;

    @Column({ length: 100 })
    title: string;

    @Column({ type: 'text' })
    description: string;

    @OneToMany(() => VacancySkillsEntity, vacancySkill => vacancySkill.vacancy)
    skills: VacancySkillsEntity[];

    @OneToMany(() => MatchEntity, match => match.vacancy)
    matches: MatchEntity[];

    @ManyToOne(() => LocationEntity, location => location.vacancies)
    location: LocationEntity;

    @OneToMany(() => ApplicationEntity, application => application.vacancy)
    applications: ApplicationEntity[];
}












// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
// import { UserEntity } from "./UserEntity";

// // Таблица Вакансий (Vacancies):
// // sql
// // Copy code
// // CREATE TABLE Vacancies (
// //     vacancy_id INT PRIMARY KEY AUTO_INCREMENT,
// //     employer_id INT,
// //     job_title VARCHAR(255) NOT NULL,
// //     description TEXT,
// //     location VARCHAR(255),
// //     salary DECIMAL(10, 2),
// //     date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// //     FOREIGN KEY (employer_id) REFERENCES Users(user_id)
// // );
// // Примечание:

// // vacancy_id: Уникальный идентификатор вакансии.
// // employer_id: Идентификатор работодателя, связанный с вакансией.
// // job_title: Название вакансии.
// // description: Описание вакансии.
// // location: Местоположение вакансии.
// // salary: Заработная плата.
// // date_posted: Дата размещения вакансии.

// @Entity({ name: "Vacancies" })
// export class VacancyEntity {

//     @PrimaryGeneratedColumn({ name: "vacancy_id"})
//     vacancy_id: number;

//     @ManyToOne(() => UserEntity, user => user.user_id, { nullable: false })
//     @JoinColumn({ name: "employer_id" })
//     employer_id: UserEntity;

//     @Column({ name: "job_title", length: 255, nullable: false })
//     job_title: string;

//     @Column({ type: "text", name: "description", nullable: true })
//     description: string;

//     @Column({ name: "location", length: 255, nullable: true })
//     location: string;

//     @Column({ name: "salary", type: "decimal", precision: 10, scale: 2, nullable: true })
//     salary: number;

//     @CreateDateColumn({ name: "date_posted" })
//     date_posted: Date;

// }


