import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className='App'>
      <nav className='nav-bar'>
        <h2>Tasks Manger </h2>
      </nav>
      <Form
        textInput={textInput}
        setTextInput={setTextInput}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
