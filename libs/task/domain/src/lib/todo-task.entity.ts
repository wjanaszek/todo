import { ID } from '@datorama/akita';
import { TodoTaskStatus } from './todo-task-status.enum';

export type TodoTaskId = ID;

export type TodoTask = {
    id: TodoTaskId;
    status: TodoTaskStatus;
    title: string;
    description: string;
    color: string;
};

export function createTodoTask({ id, title, description }: Partial<TodoTask>): TodoTask {
    return {
        id,
        status: TodoTaskStatus.PENDING,
        title,
        description,
    } as TodoTask;
}
