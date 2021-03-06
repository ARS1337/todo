import { todo, ClearTask } from '../utils/interfaces';
import TodoListELements from './TodoListElements';

interface Props {
    todos: todo[];
    setList:any;
    setCurrent:any;
    clearTask: ClearTask;
}
const TodoElements: React.FC<Props> = ({todos,setList, setCurrent,clearTask}) => {
    return (
        <ul className="todoList tasks">
            {
                todos.map(x=>{
                    if(x.completed==false){
                        return<>
                        <TodoListELements item={x} list={todos} clearTask={clearTask} setList={setList} setCurrent={setCurrent}/>
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