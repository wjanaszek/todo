import { createTodoTask, TodoTask } from '@janaszek/task/domain';

export const MOCK_TODOS: Array<TodoTask> = [
    createTodoTask({
        id: 1,
        title: 'Clean kitchen',
        description: 'Clean all parts of the kitchen',
    }),
    createTodoTask({
        id: 2,
        title: 'Cook dinner',
        description: 'Prepare some awesome for the dinner. Maybe pizza?',
    }),
    createTodoTask({
        id: 3,
        title: 'Go with dog to the vet',
        description: 'Go to get some medicines',
    }),
    createTodoTask({
        id: 4,
        title: 'Meeting with friends',
        description: 'Prepare for some drinking',
    }),
];
