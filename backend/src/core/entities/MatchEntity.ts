import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ResumeEntity } from './ResumeEntity';
import { VacancyEntity } from './VacancyEntity';

@Entity()
export class MatchEntity {
    @PrimaryGeneratedColumn()
    match_id: number;

    @ManyToOne(() => ResumeEntity, resume => resume.matches)
    resume: ResumeEntity;

    @ManyToOne(() => VacancyEntity, vacancy => vacancy.matches)
    vacancy: VacancyEntity;

    @Column({ type: 'float', default: 0.0 })
    match_score: number;

    @Column({ length: 50, default: 'pending' })
    status: string;
}




// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
// import { ResumeEntity } from "./ResumeEntity";
// import { VacancyEntity } from "./VacancyEntity";

// // Таблица Совпадений (Matches):
// // sql
// // Copy code
// // CREATE TABLE Matches (
// //     match_id INT PRIMARY KEY AUTO_INCREMENT,
// //     resume_id INT,
// //     vacancy_id INT,
// //     match_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// //     FOREIGN KEY (resume_id) REFERENCES Resumes(resume_id),
// //     FOREIGN KEY (vacancy_id) REFERENCES Vacancies(vacancy_id)
// // );
// // Примечание:

// // match_id: Уникальный идентификатор совпадения.
// // resume_id: Идентификатор резюме, связанный с совпадением.
// // vacancy_id: Идентификатор вакансии, связанный с совпадением.
// // match_date: Дата создания совпадения.



// @Entity({ name: "Matches" })
// export class MatchEntity {

//     @PrimaryGeneratedColumn({ name: "match_id"})
//     match_id: number;

//     @ManyToOne(() => ResumeEntity, resume => resume.resume_id, { nullable: false })
//     @JoinColumn({ name: "resume_id" })
//     resume_id: ResumeEntity;

//     @ManyToOne(() => VacancyEntity, vacancy => vacancy.vacancy_id, { nullable: false })
//     @JoinColumn({ name: "vacancy_id" })
//     vacancy_id: VacancyEntity;

//     @CreateDateColumn({ name: "match_date" })
//     match_date: Date;

// }



