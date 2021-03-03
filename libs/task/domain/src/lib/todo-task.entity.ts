import { ID } from '@datorama/akita';
import { TodoStatus } from './todo-status.enum';

export type TodoTask = {
  id: ID;
  status: TodoStatus;
  title: string;
  description: string;
  color: string;
};

export function createTodoTask({
  id,
  title,
  description,
}: Partial<TodoTask>): TodoTask {
  return {
    id,
    status: TodoStatus.PENDING,
    title,
    description
  } as TodoTask;
}
