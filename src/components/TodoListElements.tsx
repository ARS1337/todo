import { todo, ClearTask, UpdateTask } from '../utils/interfaces';

interface Props {
    item: todo;
    updateTask: UpdateTask;
    clearTask: ClearTask;
};

let TodoListELements: React.FC<Props> = ({ item, updateTask, clearTask }) => {
    return <><li key={item.id} className="todoElements">
        <label >{item.task}</label>
        <button onClick={() => clearTask(item.id)}>Clear</button>
        <button onClick={() => updateTask(item.id)}>Update</button>
    </li>
    </>
}

export default TodoListELements;