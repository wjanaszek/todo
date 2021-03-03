import { Injectable } from '@angular/core';
import { EntityState, QueryEntity } from '@datorama/akita';
import { TodoTask } from '@janaszek/task/domain';

@Injectable()
export class AkitaTodoTaskQueryEntity extends QueryEntity<EntityState<TodoTask>, TodoTask> {}
