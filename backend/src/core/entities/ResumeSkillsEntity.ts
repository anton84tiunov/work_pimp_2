import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ResumeEntity } from './ResumeEntity';
import { SkillEntity } from './SkillEntity';

@Entity()
export class ResumeSkillsEntity {
    @PrimaryGeneratedColumn()
    resume_skill_id: number;

    @ManyToOne(() => ResumeEntity, resume => resume.skills)
    resume: ResumeEntity;

    @ManyToOne(() => SkillEntity, skill => skill.users)
    skill: SkillEntity;
}











// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
// import { UserEntity } from "./UserEntity";
// import { ResumeEntity } from "./ResumeEntity";
// import { SkillEntity } from "./SkillEntity";


// // Таблица, Связывающая Резюме с Навыками (ResumeSkills):
// // sql
// // Copy code
// // CREATE TABLE ResumeSkills (
// //     resume_skill_id INT PRIMARY KEY AUTO_INCREMENT,
// //     resume_id INT,
// //     skill_id INT,
// //     FOREIGN KEY (resume_id) REFERENCES Resumes(resume_id),
// //     FOREIGN KEY (skill_id) REFERENCES Skills(skill_id)
// // );
// // Примечание:

// // resume_skill_id: Уникальный идентификатор связи резюме с навыком.
// // resume_id: Идентификатор резюме.
// // skill_id: Идентификатор навыка.



// @Entity({ name: "ResumeSkills" })
// export class ResumeSkillsEntity {

//     @PrimaryGeneratedColumn({ name: "resume_skill_id" })
//     resume_skill_id: number;

//     @ManyToOne(() => ResumeEntity, resume => resume.resume_id, { nullable: false })
//     @JoinColumn({ name: "resume_id" })
//     resume_id: ResumeEntity;

//     @ManyToOne(() => SkillEntity, skill => skill.skill_id, { nullable: false })
//     @JoinColumn({ name: "skill_id" })
//     skill_id: SkillEntity;
// }


