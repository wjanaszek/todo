export interface GetQueryEntity<T> {
  getAll(): Array<T>;

  getEntity(): T;

  hasEntity(): boolean;

  getCount: number;
}
