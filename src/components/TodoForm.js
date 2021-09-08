import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ onSubmitHandler }) {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const ksubmitHandler = (e) => {
    e.preventDefault();
    onSubmitHandler(todo);
    setTodo({ title: "", content: "" });
  };
  return (
    <form className="todo_form" onSubmit={ksubmitHandler}>
      <div className="todo_inputs">
        <input
          className="textInput"
          id="name"
          value={todo.title}
          placeholder="Name"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          className="textInput"
          id="description"
          placeholder="Description"
          value={todo.content}
          onChange={(e) => setTodo({ ...todo, content: e.target.value })}
        />
      </div>
      <Button type="submit" className="add_todo">
        Add Todo
      </Button>
    </form>
  );
}

export default TodoForm;
