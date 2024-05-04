import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { VacancyEntity } from './VacancyEntity';
import { SkillEntity } from './SkillEntity';

@Entity()
export class VacancySkillsEntity {
    @PrimaryGeneratedColumn()
    vacancy_skill_id: number;

    @ManyToOne(() => VacancyEntity, vacancy => vacancy.skills)
    vacancy: VacancyEntity;

    @ManyToOne(() => SkillEntity, skill => skill.users)
    skill: SkillEntity;
}











// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
// import { VacancyEntity } from "./VacancyEntity";
// import { SkillEntity } from "./SkillEntity";

// // Таблица, Связывающая Вакансии с Навыками (VacancySkills):
// // sql
// // Copy code
// // CREATE TABLE VacancySkills (
// //     vacancy_skill_id INT PRIMARY KEY AUTO_INCREMENT,
// //     vacancy_id INT,
// //     skill_id INT,
// //     FOREIGN KEY (vacancy_id) REFERENCES Vacancies(vacancy_id),
// //     FOREIGN KEY (skill_id) REFERENCES Skills(skill_id)
// // );
// // Примечание:

// // vacancy_skill_id: Уникальный идентификатор связи вакансии с навыком.
// // vacancy_id: Идентификатор вакансии.
// // skill_id: Идентификатор навыка.

// @Entity({ name: "VacancySkills" })
// export class VacancySkillsEntity {

//     @PrimaryGeneratedColumn({ name: "vacancy_skill_id" })
//     vacancy_skill_id: number;

//     @ManyToOne(() => VacancyEntity, vacancy => vacancy.vacancy_id, { nullable: false })
//     @JoinColumn({ name: "vacancy_id" })
//     vacancy_id: VacancyEntity;

//     @ManyToOne(() => SkillEntity, skill => skill.skill_id, { nullable: false })
//     @JoinColumn({ name: "skill_id" })
//     skill_id: SkillEntity;
// }



