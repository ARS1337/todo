import { todo, ClearTask, UpdateTask } from '../utils/interfaces';
import TodoListELements from './TodoListElements';

interface Props {
    todos: todo[];
    clearTask: ClearTask;
    updateTask: UpdateTask;
}
const TodoElements: React.FC<Props> = ({ todos, updateTask, clearTask }) => {
    return (
        <ul className="todoList tasks">
            {
                todos.map(x => {
                    if (x.completed === false) {
                        return <>
                            <TodoListELements item={x} clearTask={clearTask} updateTask={updateTask} />
                        </>
                    } else {
                        return <></>
                    }

                })
            }
        </ul>

    );

}

export default TodoElements;