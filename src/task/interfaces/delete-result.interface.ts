import { Task } from '../entities'

export interface DeleteResult {
  count: number
  task?: Task
}
