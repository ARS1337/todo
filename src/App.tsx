import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import {todo } from './utils/interfaces';
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
