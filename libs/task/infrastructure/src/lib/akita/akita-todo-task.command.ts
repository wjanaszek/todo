import { Injectable } from '@angular/core';
import { TodoTask, TodoTaskCommand, TodoTaskId, TodoTaskResource } from '@janaszek/task/domain';
import { map } from 'rxjs/operators';
import { AkitaTodoTaskStore } from './akita-todo-task.store';

@Injectable()
export class AkitaTodoTaskCommand implements TodoTaskCommand {
    constructor(
        private entityStore: AkitaTodoTaskStore,
        private entityResource: TodoTaskResource
    ) {}

    create(data: TodoTask): void {
        this.entityResource.create(data).pipe(
            map(() => this.entityStore.add(data))
            // catchError((error) => this.messageService.error(error))
        );
    }

    delete(id: TodoTaskId): void {
        this.entityResource.delete(id).pipe(
            map(() => this.entityStore.remove([id]))
            // catchError((error) => this.messageService.error(error))
        );
    }

    getAll(): void {
        this.entityResource.getAll().pipe(
            map((entities: Array<TodoTask>) => this.entityStore.set(entities))
            // catchError((error) => this.messageService.error(error))
        );
    }

    update(id: TodoTaskId, data: Partial<TodoTask>): void {
        this.entityResource.update(id, data).pipe(
            map(() => this.entityStore.update([id], { ...data }))
            // catchError((error) => this.messageService.error(error))
        );
    }
}
