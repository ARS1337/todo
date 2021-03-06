import { useState } from "react";
import { firebaseConfig, db } from "../utils/firebase";
import TodoElements from "./TodoElements";
import { todo, ClearTask } from '../utils/interfaces';

let Todo = () => {
    let curr: todo = {
        task: "Your Tasks Here",
        completed: false,
        id: 0
    }

    let InitList1: todo[] = [curr];
    let [id, setId] = useState(1);
    let [current, setCurrent] = useState("");
    let [list, setlist] = useState(InitList1);

    return <div className="container">
        <h3 className="title">TodoApp</h3>
        <input type="textbox" value={current} onChange={(e) => { setCurrent(e.target.value) }}></input>
        <button onClick={() => { addTask(list, current, id, setlist, setId, setCurrent) }}>addTask</button>
        <TodoElements todos={list} clearTask={clearTask} setList={setlist} setCurrent={setCurrent} />
    </div>
}

/*
    add task
    remove task
*/
let addTask = (list: todo[], current: string, id: number, setList: any, setId: any, setCurrent: any) => {
    if (current) {
        setList([...list, { "task": current, "completed": false, "id": id }]);
        setId(id + 1);
        addData([...list, { "task": current, "completed": false, "id": id }],setCurrent);
    } else {
        alert("Enter task to continue!")
    }

}
let clearTask: ClearTask = (id: number, list: todo[], setList: any, setCurrent: any) => {
    let temp: todo[] = list;
    temp[id].completed = true;
    console.log(temp)
    setList(temp);
    // todo.completed = true;
    addData(temp,setCurrent);
    console.log(setCurrent(""));
    
}
/*
create/ add a task
update that task / change what the task was
delete remove a task
last read / sync with main db at cloud
*/
let addData = (list: todo[],setCurrent:any) => {
    db.collection("todosList").doc("todos").set({ list })

        .then((docRef: any) => {
            console.log("Document written with ID: ", docRef);
        })
        .then((docRef: any) => {
            setCurrent("...");
            setCurrent("");
            sync();
        })
        .catch((error: {}) => {
            console.error("Error adding document: ", error);
        });
    console.log("addData called");
}
let sync = () => {
    var docRef = db.collection("todosList").doc("todos");

    docRef.get().then((doc: any) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error: {}) => {
        console.log("Error getting document:", error);
    });
}

export default Todo;
