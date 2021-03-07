import { TodoTask, TodoTaskId, TodoTaskStatus } from '@janaszek/task/domain';
import { Observable } from 'rxjs';

export abstract class TodoTaskQuery {
	abstract selectAllTodoTasks(): Observable<Array<TodoTask>>;

	abstract selectCount(): Observable<number>;

	abstract selectById(id: TodoTaskId): Observable<TodoTask>;

	abstract selectLoading(): Observable<boolean>;

	abstract selectByStatus(status: TodoTaskStatus): Observable<Array<TodoTask>>;
}
