import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'account' })
export class AccountsEntity {
    
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id!: number

    @Column({ name: 'first_name', type: 'varchar', length: '20' })
    firstName: string

    @Column({ name: 'last_name', type: 'varchar', length: '20' })
    lastName: string

    @Column({ type: 'varchar', length: '15' })
    login: string

    @Column({ name: 'password_hash', type: 'varchar', length: '255' })
    passwordHash: string

    @Column({ name: 'password_salt', type: 'varchar', length: '255' })
    passwordSalt: string

    @Column({ name: 'password_hint', type: 'varchar', length: '20' })
    passwordHint: string

    @Column({ type: 'varchar', length: '50' })
    email: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date


}