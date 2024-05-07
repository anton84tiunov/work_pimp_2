import { UserInterfase } from './UserInterfase';
import { ResumeSkillsInterfase } from './ResumeSkillsInterfase';
import { MatchInterfase } from './MatchInterfase';
/**
* интерфейс определяет структуру резюме пользователя. Он содержит информацию о названии, 
* описании, связанных навыках и совпадениях с вакансиями, а также связь с пользователем, владельцем резюме.
*/
export interface ResumeInterfase {
    /**
    * Уникальный идентификатор резюме.
    */
    resume_id: number;
    /**
    * Пользователь, владелец резюме.
    */
    user: UserInterfase;
    /**
    * Название резюме.
    */
    title: string;
    /**
    * Описание резюме.
    */
    description?: string;
    /**
    * Массив навыков, связанных с резюме.
    */
    skills?: ResumeSkillsInterfase[];
    /**
    * Массив совпадений между резюме и вакансиями.
    */
    matches?: MatchInterfase[];
}












// import { Interfase, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
// import { UserInterfase } from "./UserInterfase";

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

// @Interfase({ name: "Resumes" })
// export class ResumeInterfase {
//     @PrimaryGeneratedColumn({ name: "resume_id"})
//     resume_id: number;

//     @ManyToOne(() => UserInterfase, user => user.user_id, { nullable: false })
//     @JoinColumn({ name: "user_id" })
//     user_id: UserInterfase;

//     @Column({name: "desired_job_title", length: 255, nullable: false })
//     desired_job_title : string;

//     @Column({ type: "text", name: "summary", nullable: true })
//     summary: string;
  
// }


