// TodoApp.js
import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Filter from "./Filter";

function App() {
  const [todos, setTodos] = useState([]);
  const [updateTodo, setUpdate] = useState(false);
  const [filter, setFilter] = useState("all");

  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Save tasks to local storage whenever todos change
  useEffect(() => {
    if (updateTodo) {
      localStorage.setItem("todos", JSON.stringify(todos));
      setUpdate(false);
    }
  }, [updateTodo,todos]);

  // Add a new task
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setUpdate(true);
  };

  // Mark a task as complete/incomplete
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setUpdate(true);
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    setUpdate(true);
  };

  return (
    <div className="pt-5 px-2" style={{ "background-color": "#dce4eb" }}>
      <h1 className="mx-2">To-Do List</h1>
      <div className="container col-md-12 row">
        <div className="col-4">
          <AddTodo addTodo={addTodo} />
        </div>
        <div className="col-8">
          <Filter setTodos={setTodos} setFilter={setFilter} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            filter={filter}
            deleteTodo={deleteTodo}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
