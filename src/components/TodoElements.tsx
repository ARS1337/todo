import { todo, ClearTask } from '../utils/interfaces';
import TodoListELements from './TodoListElements';

interface Props {
    todos: todo[];
    clearTask: ClearTask;
}
const TodoElements: React.FC<Props> = ({todos, clearTask}) => {
    return (
        <ul className="todoList tasks">
            {
                todos.map(x=>{
                    if(x.completed==false){
                        return<>
                        <TodoListELements item={x} list={todos} clearTask={clearTask}/>
                        </>
                    }else{
                        return <></>
                    }

                })
            }
        </ul>

    );

}

export default TodoElements;