import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskQuery } from '@janaszek/task/domain';
import { AkitaTodoTaskQuery } from './akita/akita-todo-task.query';
import { AkitaTodoTaskQueryEntity } from './akita/akita-todo-task.query-entity';
import { AkitaTodoTaskStore } from './akita/akita-todo-task.store';

const providers: Array<Provider> = [
  AkitaTodoTaskStore,
  AkitaTodoTaskQueryEntity
];

@NgModule({
	imports: [CommonModule]
})
export class TaskInfrastructureModule {
	static forRoot(
		todoTaskQuery: Type<TodoTaskQuery> = AkitaTodoTaskQuery
	): ModuleWithProviders<TaskInfrastructureModule> {
		return {
			ngModule: TaskInfrastructureModule,
			providers: [
        ...providers,
				{
					provide: TodoTaskQuery,
					useClass: todoTaskQuery,
				},
			],
		};
	}
}
