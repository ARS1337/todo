import { todo, ClearTask, listOfTodos } from '../utils/interfaces';

interface Props {
    item: todo;
    list: todo[];
    clearTask: ClearTask;
};

let TodoListELements: React.FC<Props> = ({ item,list, clearTask }) => {
    return <><li key={item.id} className="todoElements">
        <label >{item.task}</label>
        <button onClick={() => clearTask(item,list)}>Clear</button>
    </li>
    </>
}

export default TodoListELements;