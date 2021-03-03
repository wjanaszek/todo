import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';

export type SelectAllOptions = {
  limitTo: number;
  asObject: number;
};

export abstract class SelectQueryEntity<T> {
  abstract selectAll(options: Partial<SelectAllOptions>): Observable<Array<T>>;

  abstract selectMany(ids: Array<ID>): Observable<Array<T>>;

  abstract selectEntity(id: ID): Observable<T>;

  abstract selectFirst(): Observable<T>;

  abstract selectLast(): Observable<T>;

  // @TODO add params here
  abstract selectCount(): Observable<number>;

  abstract selectLoading(): Observable<boolean>;
}
