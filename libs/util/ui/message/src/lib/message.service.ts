export abstract class MessageService {
    abstract error(options: unknown): void;

    abstract success(options: unknown): void;

    abstract warning(options: unknown): void;
}
