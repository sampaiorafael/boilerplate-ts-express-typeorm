import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'cars' })
export class CarsEntity {
    
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id!: number

    @Column({ type: 'char', length: '20' })
    brand!: string

    @Column({ type: 'char', length: '20' })
    model!: string

    @Column({ type: 'year' })
    year!: number

    @Column({ type: 'char', length: '12' })
    category!: string

    @Column({ type: 'decimal', unsigned: true })
    value!: number

    @Column({ name: 'motor_hp', type: 'char', length: '3' })
    motorHp!: number

    @Column({ type: 'decimal', unsigned: true })
    rate!: number

    @Column({ type:'tinytext' })
    description!: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt!: Date;

}