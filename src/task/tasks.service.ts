import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto, UpdateTaskStatusDto, FilterTasksDto } from './tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find({ 
      relations: ['user'],
      where: { deletedAt: null }
    });
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create(createTaskDto);
    return this.tasksRepository.save(task);
  }

  async findByUserId(userId: number, filters?: FilterTasksDto): Promise<Task[]> {
    const query = this.tasksRepository
      .createQueryBuilder('task')
      .where('task.userId = :userId', { userId })
      .andWhere('task.deletedAt IS NULL');

    if (filters?.status) {
      query.andWhere('task.status = :status', { status: filters.status });
    }

    return query.getMany();
  }

  async updateStatus(taskId: number, updateTaskStatusDto: UpdateTaskStatusDto): Promise<Task> {
    await this.tasksRepository.update(taskId, {
      status: updateTaskStatusDto.status,
    });
    return this.tasksRepository.findOne({ where: { id: taskId } });
  }

  async softDelete(taskId: number): Promise<void> {
    await this.tasksRepository.softDelete(taskId);
  }
}