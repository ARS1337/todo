interface todo {
    task: string,
    completed: boolean,
    id:number
};
interface listOfTodos {
    todos: todo[];
}
type ClearTask = (id:number,list:todo[],setList:any,setCurrent:any)=> void;

export type {todo,listOfTodos,ClearTask};