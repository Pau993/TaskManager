import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Task } from '../../task/entities/task.entity';

@Entity()
export class User {

  @ApiProperty({ description: 'ID único del usuario', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Nombre del usuario', example: 'Juan Pérez' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Email único del usuario', example: 'juan@example.com' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ description: 'Fecha de creación del usuario' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Tareas asignadas al usuario', type: () => [Task] })
  @OneToMany(() => Task, task => task.user)
  tasks: Task[];
}
