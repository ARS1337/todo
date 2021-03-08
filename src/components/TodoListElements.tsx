import { todo, ClearTask } from '../utils/interfaces';

interface Props {
    item: todo;
    list: todo[];
    setList: any;
    setCurrent: any;
    setId:any;
    updateTask:any;
    current:string;
    clearTask: ClearTask;
};

let TodoListELements: React.FC<Props> = ({ item, list, setList, setCurrent,setId, updateTask,current,clearTask }) => {
    return <><li key={item.id} className="todoElements">
        <label >{item.task}</label>
        <button onClick={() => clearTask(item.id, list, setList, setCurrent,setId)}>Clear</button>
        <button onClick={() => updateTask(item.id, list, setList, setCurrent,setId,current)}>Update</button>
    </li>
    </>
}

export default TodoListELements;