import { Injectable } from '@angular/core';
import { TodoTask, TodoTaskCommand, TodoTaskId, TodoTaskResource } from '@janaszek/task/domain';
import { MessageService } from '@janaszek/util/ui/message';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AkitaTodoTaskStore } from './akita-todo-task.store';

@Injectable()
export class AkitaTodoTaskCommand implements TodoTaskCommand {
    constructor(
        private entityStore: AkitaTodoTaskStore,
        private entityResource: TodoTaskResource,
        private messageService: MessageService
    ) {}

    create(data: TodoTask): void {
        this.entityResource.create(data).pipe(
            map(() => this.entityStore.add(data)),
            catchError((error) => this.handleError(error))
        );
    }

    delete(id: TodoTaskId): void {
        this.entityResource.delete(id).pipe(
            map(() => this.entityStore.remove([id])),
            catchError((error) => this.handleError(error))
        );
    }

    getAll(): void {
        this.entityResource.getAll().pipe(
            map((entities: Array<TodoTask>) => this.entityStore.set(entities)),
            catchError((error) => this.handleError(error))
        );
    }

    update(id: TodoTaskId, data: Partial<TodoTask>): void {
        this.entityResource.update(id, data).pipe(
            map(() => this.entityStore.update([id], { ...data })),
            catchError((error) => this.handleError(error))
        );
    }

    private handleError(error: unknown): Observable<void> {
        this.messageService.error(error);
        return of(null);
    }
}
