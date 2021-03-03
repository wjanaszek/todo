import { Injectable } from '@angular/core';
import { EntityState, EntityStore } from '@datorama/akita';
import { TodoTask } from '@janaszek/task/domain';

@Injectable()
export class AkitaTodoTaskStore extends EntityStore<
	EntityState<TodoTask>,
	TodoTask
> {}
