import { ID } from '@datorama/akita';
import { TodoTask } from '@janaszek/task/domain';
import { SelectAllOptions, SelectQueryEntity } from '@janaszek/util/domain';
import { Observable } from 'rxjs';

export abstract class TodoTaskQuery implements SelectQueryEntity<TodoTask> {
  abstract selectAll(options: Partial<SelectAllOptions>): Observable<Array<TodoTask>>;

  abstract selectCount(): Observable<number>;

  abstract selectEntity(id: ID): Observable<TodoTask>;

  abstract selectFirst(): Observable<TodoTask>;

  abstract selectLast(): Observable<TodoTask>;

  abstract selectLoading(): Observable<boolean>;

  abstract selectMany(ids: Array<ID>): Observable<Array<TodoTask>>;
}
