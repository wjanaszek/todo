import { TodoTask, TodoTaskId } from '@janaszek/task/domain';

export abstract class TodoTaskCommand {
	abstract create(data: TodoTask): void;

	abstract delete(id: TodoTaskId): void;

	abstract getAll(): void;

	abstract update(id: TodoTaskId, data: Partial<TodoTask>): void;
}
