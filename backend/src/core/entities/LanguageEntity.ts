import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity()
export class LanguageEntity {
    @PrimaryGeneratedColumn()
    language_id: number;

    @Column({ length: 50 })
    name: string;

    @ManyToMany(() => UserEntity, user => user.languages)
    @JoinTable()
    users: UserEntity[];
}