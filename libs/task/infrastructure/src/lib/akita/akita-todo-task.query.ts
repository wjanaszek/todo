import { Injectable } from '@angular/core';
import { EntityState, QueryEntity } from '@datorama/akita';
import { TodoTask, TodoTaskId, TodoTaskQuery, TodoTaskStatus } from '@janaszek/task/domain';
import { Observable } from 'rxjs';
import { AkitaTodoTaskStore } from './akita-todo-task.store';

@Injectable()
export class AkitaTodoTaskQuery
    extends QueryEntity<EntityState<TodoTask>>
    implements TodoTaskQuery {
    constructor(private entityStore: AkitaTodoTaskStore) {
        super(entityStore);
    }

    selectAllTodoTasks(): Observable<Array<TodoTask>> {
        return this.selectAll();
    }

    selectById(id: TodoTaskId): Observable<TodoTask> {
        return this.selectEntity<TodoTask>([id]);
    }

    selectByStatus(status: TodoTaskStatus): Observable<Array<TodoTask>> {
        return this.selectAll({ filterBy: (todoTask: TodoTask) => todoTask.status === status });
    }
}
