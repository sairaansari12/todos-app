import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      e.target.className += " was-validated";
      e.preventDefault();

      return;
    }
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <textarea
          placeholder="Add a new todo task"
          rows={10}
          value={text}
          required={true}
          maxLength={255}
          className="form-control"
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <button className="btn btn-success m-2">Add Todo Task</button>
    </form>
  );
}

export default AddTodo;
