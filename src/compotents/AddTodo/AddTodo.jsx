import React from "react";
import cl from "./AddTodo.module.css";

export default function AddTodo({ setTodo }) {
  const [text, setText] = React.useState("");

  const AddTodoHandler = () => {
    if (!text) return;
    setTodo((prev) => [...prev, { id: Date.now(), text, isCompleted: false }]);
    setText("");
  };
  return (
    <div className={cl.AddTodo}>
      <input
      className={cl.AddTodo__input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={AddTodoHandler}>Добавить</button>
    </div>
  );
}
