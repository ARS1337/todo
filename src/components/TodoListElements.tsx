import { todo, ClearTask, listOfTodos } from '../utils/interfaces';

interface Props {
    item: todo;
    list: todo[];
    setList: any;
    setCurrent: any;
    clearTask: ClearTask;
};

let TodoListELements: React.FC<Props> = ({ item, list, setList, setCurrent, clearTask }) => {
    return <><li key={item.id} className="todoElements">
        <label >{item.task}</label>
        <button onClick={() => clearTask(item.id, list, setList, setCurrent)}>Clear</button>
    </li>
    </>
}

export default TodoListELements;