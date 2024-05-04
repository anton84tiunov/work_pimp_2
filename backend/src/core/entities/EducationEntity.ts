import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity()
export class EducationEntity {
    @PrimaryGeneratedColumn()
    education_id: number;

    @Column({ length: 100 })
    institution: string;

    @Column({ length: 100 })
    degree: string;

    @OneToMany(() => UserEntity, user => user.education)
    users: UserEntity[];
}