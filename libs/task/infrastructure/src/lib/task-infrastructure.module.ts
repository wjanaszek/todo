import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { TodoTaskCommand, TodoTaskQuery, TodoTaskResource } from '@janaszek/task/domain';
import { AkitaTodoTaskCommand } from './akita/akita-todo-task.command';
import { AkitaTodoTaskQuery } from './akita/akita-todo-task.query';
import { AkitaTodoTaskStore } from './akita/akita-todo-task.store';
import { LocalStorageTodoTaskResource } from './local-storage/local-storage-todo-task.resource';

const providers: Array<Provider> = [AkitaTodoTaskStore];

@NgModule({
    imports: [CommonModule],
})
export class TaskInfrastructureModule {
    static withProviders(
        todoTaskCommand: Type<TodoTaskCommand> = AkitaTodoTaskCommand,
        todoTaskQuery: Type<TodoTaskQuery> = AkitaTodoTaskQuery,
        todoTaskResource: Type<TodoTaskResource> = LocalStorageTodoTaskResource
    ): ModuleWithProviders<TaskInfrastructureModule> {
        return {
            ngModule: TaskInfrastructureModule,
            providers: [
                ...providers,
                {
                    provide: TodoTaskCommand,
                    useClass: todoTaskCommand,
                },
                {
                    provide: TodoTaskQuery,
                    useClass: todoTaskQuery,
                },
                {
                    provide: TodoTaskResource,
                    useClass: todoTaskResource,
                },
            ],
        };
    }
}
