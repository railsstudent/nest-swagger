import { BadRequestException, Injectable } from '@nestjs/common'
import { Task } from '../interfaces'

@Injectable()
export class TaskService {
  tasks: Task[] = []

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

  deleteById(id: string): Promise<Task> {
    const task = this.tasks.find((task) => task.id === id)
    this.tasks = this.tasks.filter((task) => task.id !== id)
    return Promise.resolve(task)
  }
}
