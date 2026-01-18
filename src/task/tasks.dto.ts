import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsDateString, IsEnum } from 'class-validator';
import { TaskStatus } from './entities/task.entity';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Título de la tarea',
    example: 'Implementar autenticación',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Descripción detallada de la tarea',
    example: 'Implementar sistema de autenticación con JWT',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'ID del usuario asignado',
    example: 1,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'Fecha de vencimiento (ISO 8601)',
    example: '2026-02-15',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;
}

export class UpdateTaskStatusDto {
  @ApiProperty({
    description: 'Nuevo estado de la tarea',
    enum: TaskStatus,
    example: TaskStatus.IN_PROGRESS,
  })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

export class FilterTasksDto {
  @ApiProperty({
    description: 'Filtrar tareas por estado',
    enum: TaskStatus,
    required: false,
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}