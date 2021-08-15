import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Task')
@Controller('task')
export class TaskController {}
