import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC_FwyeGLPxey84mtzn03UVOqPrNhCxgfs",
    authDomain: "dbfortodos.firebaseapp.com",
    projectId: "dbfortodos",
    storageBucket: "dbfortodos.appspot.com",
    messagingSenderId: "1008293576283",
    appId: "1:1008293576283:web:3f818a37eacd38583d897e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();

export { firebaseConfig, db };