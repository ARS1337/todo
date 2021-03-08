import { todo, ClearTask } from '../utils/interfaces';
import TodoListELements from './TodoListElements';

interface Props {
    todos: todo[];
    setList:any;
    setCurrent:any;
    setId:any;
    updateTask:any;
    current:string;
    clearTask: ClearTask;
}
const TodoElements: React.FC<Props> = ({todos,setList, setCurrent,setId,updateTask, current,clearTask}) => {
    return (
        <ul className="todoList tasks">
            {
                todos.map(x=>{
                    if(x.completed===false){
                        return<>
                        <TodoListELements item={x} list={todos} clearTask={clearTask} setList={setList} setCurrent={setCurrent} setId={setId} updateTask={updateTask} current={current}/>
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