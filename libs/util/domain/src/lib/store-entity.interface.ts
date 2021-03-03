export abstract class StoreEntity<T> {
  abstract set(entities: Array<T>): void;

  abstract add(entity: T): void;

  abstract update(entities: Array<T>): void;

  abstract remove(): void;

  abstract upsert(): void;

  abstract upsertMany(): void;

  abstract replace(): void;

  abstract move(): void;

  abstract setLoading(): void;

  abstract setError(): void;
}
