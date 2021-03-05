import firebase from "firebase";
import firestore from "firebase/firestore";
import { useState } from "react";

function Todo() {
    let [id, setId] = useState("");
    let x: number;
    let cntr: number;
    cntr = 0;
    var firebaseConfig = {
        apiKey: "AIzaSyC_FwyeGLPxey84mtzn03UVOqPrNhCxgfs",
        authDomain: "dbfortodos.firebaseapp.com",
        projectId: "dbfortodos",
        storageBucket: "dbfortodos.appspot.com",
        messagingSenderId: "1008293576283",
        appId: "1:1008293576283:web:3f818a37eacd38583d897e"
    };
    //   Initialize Firebase
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : x = 1;


    var db = firebase.firestore();

    console.log("todo");

    return <>
        <input type="number" value={id} onChange={(e) => { setId(e.target.value) }}></input>
        <button onClick={() => { deleteCollection(db, id) }}>deleteCollection</button>
        <button onClick={() => { addData(db, id) }}>addData</button>
    </>
}
let deleteCollection = (db: any, id: string) => {
    db.collection("todosList").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error: {}) => {
        console.error("Error removing document: ", error);
    });
}
function addData(db: any, id: string) {
    db.collection("todosList").doc(id).set({
        todo: "asdasdasdasdasd",
        completed: true,
    })

        .then((docRef: { id: string | undefined }) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error: {}) => {
            console.error("Error adding document: ", error);
        });
    console.log("addData called");

}
export default Todo;