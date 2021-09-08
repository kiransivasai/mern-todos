import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { createTodo, readTodos } from "./functions";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todosChanged, setTodosChanged] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await readTodos();
      console.log(result);
      setTodos(result);
      setLoading(false);
    };
    fetchData();
    setTodosChanged(false);
  }, [todosChanged]);

  const onActionPerformed = () => {
    setTodosChanged(true);
  };

  const onSubmitHandler = async (todo) => {
    const result = await createTodo(todo);
    setTodos([...todos, result]);
  };
  return (
    <div className="app">
      <h1>My Todos</h1>
      <TodoForm onSubmitHandler={onSubmitHandler} />
      {loading ? (
        <Preloader />
      ) : (
        <Todos todos={todos} onActionPerformed={onActionPerformed} />
      )}
    </div>
  );
}

export default App;
