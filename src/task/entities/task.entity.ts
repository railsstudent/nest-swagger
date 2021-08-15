import { IsBoolean, IsString } from 'class-validator'

export class Task {
  @IsString()
  id: string

  @IsString()
  name: string

  @IsBoolean()
  completed: boolean
}
