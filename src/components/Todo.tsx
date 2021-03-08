import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import TodoElements from "./TodoElements";
import { todo } from '../utils/interfaces';

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

    useEffect(() => {
        sync(setlist, setId, 0);
    }, []);

    return <div className="container">
        <h3 className="title">TodoApp</h3>
        <input type="textbox" value={current} onChange={(e) => { setCurrent(e.target.value) }}></input>
        <button onClick={() => { addTask(list, current, id, setlist, setId, setCurrent) }}>addTask</button>
        <TodoElements todos={list} clearTask={(id) => { clearTask(id, list, setlist, setCurrent, setId) }} updateTask={(id) => { updateTask(id, list, setlist, setCurrent, setId, current) }} />
    </div>
}

/*
    add task
    remove task
*/
let addTask = (list: todo[], current: string, id: number, setList: any, setId: any, setCurrent: any) => {
    if (current) {
        addData([...list, { "task": current, "completed": false, "id": id }], setCurrent, setList, setId, id, 0);
        setId(id + 1);
    } else {
        alert("Enter task to continue!")
    }

}

let clearTask = (id: number, list: todo[], setList: any, setCurrent: any, setId: any) => {
    let temp: todo[] = list;
    console.log(temp, id)
    temp.map(x => {
        if (x.id === id) {
            x.completed = true;
        }
        return x;
    })
    addData(temp, setCurrent, setList, setId, id, 1);
    console.log(setCurrent(""));
}

let updateTask = (id: number, list: todo[], setList: any, setCurrent: any, setId: any, current: string) => {
    if (current) {
        let temp: todo[] = list;
        console.log(temp, id)
        temp.map(x => {
            if (x.id === id) {
                x.task = current;
            }
            return x;
        })
        addData(temp, setCurrent, setList, setId, id, 0);
    } else {
        alert("Enter task to continue!")
    }
    setCurrent("");
}
/*
create/ add a task
update that task / change what the task was
delete remove a task
last read / sync with main db at cloud
*/

/// addData and sync sends and receives data from and to firestore

let addData = (list: todo[], setCurrent: any, setList: any, setId: any, id: number, clear: number) => {
    let temp = db.collection("todosList").doc("todos");
    let data = list;
    if (clear) {
        data = list.filter(x => x.completed === false);
    }
    temp.set({ data })

        .then((docRef: any) => {
            console.log("Document written with ID: ", docRef);
        })
        .then((docRef: any) => {
            setCurrent("...");
            setCurrent("");
            sync(setList, setId, id);
        })
        .catch((error: {}) => {
            console.error("Error adding document: ", error);
        });
    console.log("addData called");
}

let sync = (setList: any, setId: any, id: number) => {
    var docRef = db.collection("todosList").doc("todos");

    docRef.get().then((doc: any) => {
        if (doc.exists) {
            setList(doc.data().data);
            console.log(doc.data().data);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error: {}) => {
        console.log("Error getting document:", error);
    });
}

export default Todo;
