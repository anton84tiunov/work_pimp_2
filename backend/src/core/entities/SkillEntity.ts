import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity()
export class SkillEntity {
    @PrimaryGeneratedColumn()
    skill_id: number;

    @Column({ length: 100 })
    name: string;

    @ManyToMany(() => UserEntity, user => user.skills)
    users: UserEntity[];
}








// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
// import { UserEntity } from "./UserEntity";

// // Таблица Навыков (Skills):
// // sql
// // Copy code
// // CREATE TABLE Skills (
// //     skill_id INT PRIMARY KEY AUTO_INCREMENT,
// //     skill_name VARCHAR(255) UNIQUE NOT NULL
// // );
// // Примечание:

// // skill_id: Уникальный идентификатор навыка.
// // skill_name: Название навыка (уникальное поле).

// @Entity({ name: "Skills" })
// export class SkillEntity {

//     @PrimaryGeneratedColumn({ name: "skill_id"})
//     skill_id: number;

//     @Column({ name: "skill_name", length: 255, unique: true, nullable: false })
//     skill_name: string;

// }


// id: number
// Описание: Первичный ключ для идентификации каждой записи о навыке пользователя.
// Назначение: Уникальный идентификатор записи о навыке пользователя.
// user: UserEntity
// Описание: Связь с объектом UserEntity, которому принадлежит данный навык.
// Назначение: Определяет связь между записью о навыке и соответствующим пользователем.
// skillName: string
// Описание: Название навыка.
// Назначение: Содержит название навыка, который пользователь обладает.
// proficiencyLevel: string
// Описание: Уровень владения навыком (enum: "beginner", "intermediate", "advanced", "expert").
// Назначение: Определяет уровень владения указанным навыком пользователем.
// createdAt: Date
// Описание: Дата и время создания записи о навыке.
// Назначение: Фиксирует момент создания записи о навыке пользователя.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи о навыке.
// Назначение: Отражает момент последнего изменения информации о навыке пользователя.

