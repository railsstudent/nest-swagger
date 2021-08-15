import { UpdateTaskDto } from './dtos/update-task.dto'
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateTaskDto } from './dtos'
import { Task, DeleteResult } from './interfaces'
import { TaskService } from './services'

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private service: TaskService) {}

  @Get()
  getAll(): Promise<Task[]> {
    return this.service.listAll()
  }

  @Get(':id')
  getTask(@Param('id', ParseUUIDPipe) id: string): Promise<Task> {
    return this.service.findById(id)
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseUUIDPipe) id: string): Promise<DeleteResult> {
    return this.service.deleteById(id)
  }

  @Post()
  createTask(@Body() dto: CreateTaskDto): Promise<Task> {
    return this.service.createTask(dto)
  }

  @Put(':id')
  updateTask(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateTaskDto): Promise<Task> {
    return this.service.updateTask(id, dto)
  }
}
