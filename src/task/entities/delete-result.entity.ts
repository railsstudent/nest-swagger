import { IsNumber, IsOptional, Min, ValidateNested } from 'class-validator'
import { Task } from './task.entity'

export class DeleteResult {
  @IsNumber()
  @Min(0)
  count: number

  @IsOptional()
  @ValidateNested()
  task?: Task
}
