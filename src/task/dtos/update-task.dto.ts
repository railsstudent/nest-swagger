import { IsBoolean, IsDefined } from 'class-validator'

export class UpdateTaskDto {
  @IsDefined()
  @IsBoolean()
  completed: boolean
}
