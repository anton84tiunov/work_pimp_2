import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from './UserEntity';
import { ResumeSkillsEntity } from './ResumeSkillsEntity';
import { MatchEntity } from './MatchEntity';

@Entity()
export class ResumeEntity {
    @PrimaryGeneratedColumn()
    resume_id: number;

    @ManyToOne(() => UserEntity, user => user.resumes)
    user: UserEntity;

    @Column({ length: 100 })
    title: string;

    @Column({ type: 'text' })
    description: string;

    @OneToMany(() => ResumeSkillsEntity, resumeSkill => resumeSkill.resume)
    skills: ResumeSkillsEntity[];

    @OneToMany(() => MatchEntity, match => match.resume)
    matches: MatchEntity[];
}












// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
// import { UserEntity } from "./UserEntity";

// // Таблица Резюме (Resumes):
// // sql
// // Copy code
// // CREATE TABLE Resumes (
// //     resume_id INT PRIMARY KEY AUTO_INCREMENT,
// //     user_id INT,
// //     desired_job_title VARCHAR(255) NOT NULL,
// //     summary TEXT,
// //     FOREIGN KEY (user_id) REFERENCES Users(user_id)
// // );
// // Примечание:

// // resume_id: Уникальный идентификатор резюме.
// // user_id: Идентификатор пользователя, связанный с резюме.
// // desired_job_title: Желаемая должность в резюме.
// // summary: Описание резюме.

// @Entity({ name: "Resumes" })
// export class ResumeEntity {
//     @PrimaryGeneratedColumn({ name: "resume_id"})
//     resume_id: number;

//     @ManyToOne(() => UserEntity, user => user.user_id, { nullable: false })
//     @JoinColumn({ name: "user_id" })
//     user_id: UserEntity;

//     @Column({name: "desired_job_title", length: 255, nullable: false })
//     desired_job_title : string;

//     @Column({ type: "text", name: "summary", nullable: true })
//     summary: string;
  
// }


