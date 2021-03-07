import { Injectable } from '@angular/core';
import { TodoTask, TodoTaskId, TodoTaskResource } from '@janaszek/task/domain';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { MOCK_TODOS } from './local-storage-mock.data';

@Injectable()
export class LocalStorageTodoTaskResource extends TodoTaskResource {
    private static readonly DELAY_TIME: number = 500;

    create(data: TodoTask): Observable<TodoTask> {
        return of(data).pipe(
            tap(() => {
                if (this.containsEntity(data.id)) {
                    throw new Error(`Todo task with id ${data.id} already exists!`);
                }

                localStorage.setItem(`${data.id}`, this.serializeData(data));
            }),
            delay(LocalStorageTodoTaskResource.DELAY_TIME)
        );
    }

    delete(id: TodoTaskId): Observable<void> {
        return of(null).pipe(
            tap(() => {
                if (!this.containsEntity(id)) {
                    throw new Error(`Todo task with id ${id} not found!`);
                }

                localStorage.removeItem(`${id}`);
            }),
            delay(LocalStorageTodoTaskResource.DELAY_TIME)
        );
    }

    getAll(): Observable<Array<TodoTask>> {
        return of(MOCK_TODOS).pipe(delay(LocalStorageTodoTaskResource.DELAY_TIME));
    }

    update(id: TodoTaskId, data: Partial<TodoTask>): Observable<void> {
        return of(null).pipe(
            tap(() => {
                if (!this.containsEntity(id)) {
                    throw new Error(`Todo task with id ${id} not found!`);
                }

                const existingEntity = this.deserializeData(localStorage.getItem(`${id}`));
                localStorage.setItem(`${id}`, this.serializeData({ ...existingEntity, ...data }));
            }),
            delay(LocalStorageTodoTaskResource.DELAY_TIME)
        );
    }

    private containsEntity(entityId: TodoTaskId): boolean {
        return !!localStorage.getItem(`${entityId}`);
    }

    private deserializeData(jsonString: string): TodoTask {
        return JSON.parse(jsonString);
    }

    private serializeData(data: Record<string, unknown>): string {
        return JSON.stringify(data);
    }
}
