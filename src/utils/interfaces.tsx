interface todo {
    task: string,
    completed: boolean,
    id:number
};
interface listOfTodos {
    todos: todo[];
}
type ClearTask = (todo:todo,list:todo[])=> void;

export type {todo,listOfTodos,ClearTask};