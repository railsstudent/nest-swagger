import { BadRequestException, Injectable } from '@nestjs/common'
import { DeleteResult, Task } from '../interfaces'
import { v4 } from 'uuid'
import { CreateTaskDto, UpdateTaskDto } from '../dtos'

@Injectable()
export class TaskService {
  tasks: Task[] = [
    {
      id: v4(),
      name: 'Do laundry',
      completed: true,
    },
    {
      id: v4(),
      name: 'Clean my bedroom',
      completed: true,
    },
    {
      id: v4(),
      name: 'Clean bathroom',
      completed: false,
    },
  ]

  listAll(): Promise<Task[]> {
    return Promise.resolve(this.tasks)
  }

  findById(id: string): Promise<Task> {
    const task = this.tasks.find((task) => task.id === id)
    if (!task) {
      throw new BadRequestException('Task not found')
    }
    return Promise.resolve(task)
  }

  deleteById(id: string): Promise<DeleteResult> {
    const task = this.tasks.find((task) => task.id === id)
    this.tasks = this.tasks.filter((task) => task.id !== id)
    return Promise.resolve({
      count: task ? 1 : 0,
      task,
    })
  }

  updateTask(id: string, dto: UpdateTaskDto): Promise<Task> {
    this.tasks = this.tasks.map((task) => {
      if (task.id !== id) {
        return task
      }
      return {
        ...task,
        completed: dto.completed,
      }
    })

    return this.findById(id)
  }

  createTask(dto: CreateTaskDto): Promise<Task> {
    const newTask: Task = {
      ...dto,
      id: v4(),
      completed: false,
    }
    this.tasks = [...this.tasks, newTask]
    return Promise.resolve(newTask)
  }
}
