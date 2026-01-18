import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, DeleteDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity()
export class Task {
  @ApiProperty({ description: 'ID único de la tarea', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Título de la tarea', example: 'Implementar autenticación' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Descripción de la tarea', example: 'Implementar sistema de autenticación con JWT' })
  @Column()
  description: string;

  @ApiProperty({ 
    description: 'Estado de la tarea', 
    enum: TaskStatus,
    example: TaskStatus.PENDING 
  })
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @ApiProperty({ description: 'Fecha de vencimiento', example: '2026-02-15' })
  @Column({ type: 'date', nullable: true })
  dueDate: Date;

  @ApiProperty({ description: 'Usuario asignado a la tarea', type: () => User })
  @ManyToOne(() => User, user => user.tasks)
  user: User;

  @ApiProperty({ description: 'ID del usuario asignado', example: 1 })
  @Column()
  userId: number;

  @ApiProperty({ description: 'Fecha de eliminación (soft delete)' })
  @DeleteDateColumn()
  deletedAt?: Date;

  @ApiProperty({ description: 'Fecha de creación' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}