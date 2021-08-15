import { Module } from '@nestjs/common'
import { TaskController } from './task.controller'
import { TaskService } from './services'

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
