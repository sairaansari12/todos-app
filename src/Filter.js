// Filter.js
import React, { useState } from "react";

function Filter({ setTodos,setFilter}) {
  const [clicked, setClicked] = useState("all");

  const todosAll = JSON.parse(localStorage.getItem("todos")) || [];

  const handleFilterChange = (filter) => {
    setClicked(filter);
    setFilter(filter)
    if (filter === "all") {
      setTodos(todosAll);
    } else if (filter === "completed") {
      setTodos(todosAll.filter((todo) => todo.completed));
    } else if (filter === "pending") {
      setTodos(todosAll.filter((todo) => !todo.completed));
    }
  };

  return (
    <div>
      <button
        className={
          clicked === "all"
            ? "btn btn-success p-2 mx-1"
            : "btn btn-secondary p-2 mx-1"
        }
        onClick={() => handleFilterChange("all")}
      >
        All
      </button>
      <button
        className={
          clicked === "pending"
            ? "btn btn-success p-2 mx-1"
            : "btn btn-secondary p-2 mx-1"
        }
        onClick={() => handleFilterChange("pending")}
      >
        Pending
      </button>
      <button
        className={
          clicked === "completed"
            ? "btn btn-success p-2 mx-1"
            : "btn btn-secondary p-2 mx-1"
        }
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </button>
    </div>
    
  );
}

export default Filter;
