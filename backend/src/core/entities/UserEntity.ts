import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, OneToOne, JoinColumn } from 'typeorm';
import { ResumeEntity } from './ResumeEntity';
import { SkillEntity } from './SkillEntity';
import { VacancyEntity } from './VacancyEntity';
import { NotificationEntity } from './NotificationEntity';
import { LocationEntity } from './LocationEntity';
import { EducationEntity } from './EducationEntity';
import { ExperienceEntity } from './ExperienceEntity';
import { LanguageEntity } from './LanguageEntity';
import { CertificationEntity } from './CertificationEntity';
import { ApplicationEntity } from './ApplicationEntity';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 20, nullable: false})
    name: string;

    @Column({ length: 20, nullable: false})
    surname: string;

    @Column({ length: 100 , unique: true, nullable: false})
    email: string;

    @Column({ length: 100, nullable: false })
    password: string;

    @OneToMany(() => ResumeEntity, resume => resume.user)
    resumes: ResumeEntity[];

    @ManyToMany(() => SkillEntity)
    @JoinTable()
    skills: SkillEntity[];

    @OneToMany(() => VacancyEntity, vacancy => vacancy.user)
    vacancies: VacancyEntity[];

    @OneToMany(() => NotificationEntity, notification => notification.user)
    notifications: NotificationEntity[];

    @OneToOne(() => LocationEntity)
    @JoinColumn()
    location: LocationEntity;

    @OneToOne(() => EducationEntity)
    @JoinColumn()
    education: EducationEntity;

    @OneToOne(() => ExperienceEntity)
    @JoinColumn()
    experience: ExperienceEntity;

    @ManyToMany(() => LanguageEntity)
    @JoinTable()
    languages: LanguageEntity[];

    @OneToMany(() => CertificationEntity, certification => certification.user)
    certifications: CertificationEntity[];

    @OneToMany(() => ApplicationEntity, application => application.user)
    applications: ApplicationEntity[];
}













// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";

// // Таблица Пользователей (Users):
// // sql
// // Copy code
// // CREATE TABLE Users (
// //     user_id INT PRIMARY KEY AUTO_INCREMENT,
// //     username VARCHAR(255) NOT NULL,
// //     email VARCHAR(255) UNIQUE NOT NULL,
// //     password_hash VARCHAR(255) NOT NULL,
// //     registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// //     is_employer BOOLEAN DEFAULT FALSE
// // );
// // Примечание:

// // user_id: Уникальный идентификатор пользователя.
// // username: Имя пользователя.
// // email: Email пользователя (уникальное поле).
// // password_hash: Хэш пароля пользователя.
// // registration_date: Дата регистрации пользователя.
// // is_employer: Флаг, указывающий, является ли пользователь работодателем.

// @Entity({ name: "users" })
// export class UserEntity {

//     @PrimaryGeneratedColumn({ name: "user_id"})
//     user_id: number;

//     @Column({ name: "username", length: 255, nullable: false, unique: true  })
//     username: string;

//     @Column({ name: "email" , length: 255, nullable: false, unique: true })
//     email: string;

//     @Column({ name: "password_hash", length: 255, nullable: false })
//     password_hash: string;

//     @CreateDateColumn({ name: "created_at" })
//     registration_date: Date;

//     @Column({ default: false })
//     is_employer: boolean;

// }


// id: number
// Описание: Первичный ключ для идентификации каждого пользователя.
// Назначение: Уникальный идентификатор пользователя в базе данных.
// firstName: string
// Описание: Имя пользователя.
// Назначение: Хранит имя пользователя.
// lastName: string
// Описание: Фамилия пользователя.
// Назначение: Хранит фамилию пользователя.
// email: string
// Описание: Электронная почта пользователя (уникальное значение).
// Назначение: Используется для аутентификации и связи с пользователем.
// password: string
// Описание: Хэш пароля пользователя.
// Назначение: Хранит хэшированный пароль для безопасного доступа.
// role: string
// Описание: Роль пользователя (enum: "employer", "applicant").
// Назначение: Определяет роль пользователя на платформе.
// company: string
// Описание: Название компании (если пользователь - работодатель).
// Назначение: Хранит название компании работодателя.
// phoneNumber: string
// Описание: Номер телефона пользователя.
// Назначение: Хранит контактный номер телефона пользователя.
// bio: string
// Описание: Биография пользователя.
// Назначение: Содержит краткую биографическую информацию о пользователе.
// profileImage: string
// Описание: URL изображения профиля пользователя.
// Назначение: Хранит ссылку на изображение профиля пользователя.
// createdAt: Date
// Описание: Дата и время создания записи пользователя.
// Назначение: Фиксирует момент создания учетной записи пользователя.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи пользователя.
// Назначение: Отражает момент последнего изменения данных пользователя.
// jobs: JobEntity[]
// Описание: Список вакансий, созданных пользователем (если роль - работодатель).
// Назначение: Связывает пользователя с созданными им вакансиями.
// applications: ApplicationEntity[]
// Описание: Список заявок пользователя на вакансии.
// Назначение: Связывает пользователя с заявками, которые он подал на вакансии.
// skills: SkillEntity[]
// Описание: Список навыков, принадлежащих пользователю.
// Назначение: Связывает пользователя с его навыками.
// educations: EducationEntity[]
// Описание: Список образования пользователя.
// Назначение: Связывает пользователя с его образовательными данными.






