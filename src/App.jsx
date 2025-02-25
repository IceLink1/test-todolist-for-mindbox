import React, { useState } from "react";
import "./styles/App.css";
import TodoList from "./compotents/TodoList/TodoList";
import AddTodo from "./compotents/AddTodo/AddTodo";

export default function App() {
  const [todos, setState] = useState([
    { id: 1, text: "Важная дела номер 1", isCompleted: false },
    { id: 2, text: "Важная дела номер 2", isCompleted: false },
    { id: 3, text: "Важная дела номер 3", isCompleted: false },
  ]);

  return (
    <main className="App">
      <section className="App__conteiner">
        <div className="App__content">
          <h1 className="App__title">Список дел</h1>
          <div className="App__todos">
            <AddTodo setTodo={setState} />
            <TodoList todos={todos} setTodo={setState} />
          </div>
        </div>
      </section>
    </main>
  );
}
