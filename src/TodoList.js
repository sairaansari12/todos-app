import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo, filter }) {
  return (
    <div className="container border mt-4 fs-5">
      <div style={{ display: todos.length === 0 ? "block" : "none" }}>
        <h5>No data to display</h5>
      </div>
      {todos.map((todo, index) => (
        <div className="card w-100 m-1">
          <div className="card-body row">
            <p className="card-text col-md-11">
              {" "}
              <input
                type="checkbox"
                style={{ display: filter !== "all" ? "none" : "" }}
                className="form-check-input"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="mx-3">{todo.text}</span>
            </p>
            <div className="card-text col-md-1">
              <button
                className="btn btn-sm btn-danger "
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
