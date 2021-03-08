interface todo {
    task: string,
    completed: boolean,
    id: number
};
interface listOfTodos {
    todos: todo[];
}
type ClearTask = (id: number) => void;
type UpdateTask = (id: number) => void;

export type { todo, listOfTodos, ClearTask, UpdateTask };