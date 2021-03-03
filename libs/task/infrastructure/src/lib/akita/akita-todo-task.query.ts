import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { TodoTask, TodoTaskQuery } from '@janaszek/task/domain';
import { SelectAllOptions } from '@janaszek/util/domain';
import { Observable } from 'rxjs';
import { AkitaTodoTaskQueryEntity } from './akita-todo-task.query-entity';

@Injectable()
export class AkitaTodoTaskQuery implements TodoTaskQuery {
	constructor(private query: AkitaTodoTaskQueryEntity) {}

	selectAll(options: Partial<SelectAllOptions>): Observable<Array<TodoTask>> {
		return this.query.selectAll(options);
	}

	selectCount(): Observable<number> {
		return this.query.selectCount();
	}

	selectEntity(id: ID): Observable<TodoTask> {
		return this.query.selectEntity(id);
	}

	selectFirst(): Observable<TodoTask> {
		return this.query.selectFirst();
	}

	selectLast(): Observable<TodoTask> {
		return this.query.selectLast();
	}

	selectLoading(): Observable<boolean> {
		return this.query.selectLoading();
	}

	selectMany(ids: Array<ID>): Observable<Array<TodoTask>> {
		return this.query.selectMany(ids);
	}
}
