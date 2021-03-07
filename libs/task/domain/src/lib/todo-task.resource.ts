import { TodoTask, TodoTaskId } from '@janaszek/task/domain';
import { Observable } from 'rxjs';

export abstract class TodoTaskResource {
  abstract create(data: TodoTask): Observable<TodoTask>;

	abstract getAll(): Observable<Array<TodoTask>>;

	abstract delete(id: TodoTaskId): Observable<void>;

	abstract update(id: TodoTaskId, data: Partial<TodoTask>): Observable<void>;
}
