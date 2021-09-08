import React from "react";
import Todo from "./todo/Todo";
import "./Todos.css";

function Todos({ todos, onActionPerformed }) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo._id}
          onActionPerformed={onActionPerformed}
        />
      ))}
    </div>
  );
}

export default Todos;
