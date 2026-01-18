import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskStatusDto, FilterTasksDto } from './tasks.dto';
import { Task } from './entities/task.entity';

@ApiTags('Tareas')
@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tareas obtenida exitosamente',
    type: [Task],
  })
  findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({
    status: 201,
    description: 'Tarea creada exitosamente',
    type: Task,
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos',
  })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Obtener tareas de un usuario específico' })
  @ApiParam({ name: 'userId', description: 'ID del usuario' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tareas del usuario obtenida exitosamente',
    type: [Task],
  })
  findByUser(@Param('userId') userId: number, @Query() filters: FilterTasksDto) {
    return this.tasksService.findByUserId(userId, filters);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Actualizar estado de una tarea' })
  @ApiParam({ name: 'id', description: 'ID de la tarea' })
  @ApiBody({ type: UpdateTaskStatusDto })
  @ApiResponse({
    status: 200,
    description: 'Estado de la tarea actualizado exitosamente',
    type: Task,
  })
  @ApiResponse({
    status: 404,
    description: 'Tarea no encontrada',
  })
  updateStatus(@Param('id') id: number, @Body() updateTaskStatusDto: UpdateTaskStatusDto) {
    return this.tasksService.updateStatus(id, updateTaskStatusDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una tarea (soft delete)' })
  @ApiParam({ name: 'id', description: 'ID de la tarea' })
  @ApiResponse({
    status: 200,
    description: 'Tarea eliminada exitosamente',
  })
  @ApiResponse({
    status: 404,
    description: 'Tarea no encontrada',
  })
  softDelete(@Param('id') id: number) {
    return this.tasksService.softDelete(id);
  }
}