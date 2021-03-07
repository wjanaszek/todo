import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TodoTask } from '@janaszek/task/domain';

@Injectable()
@StoreConfig({ name: 'todo-tasks' })
export class AkitaTodoTaskStore extends EntityStore<EntityState<TodoTask>> {}
