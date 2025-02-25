import React from "react";
import cl from "./TodoItem.module.css";

export default function TodoItem({ todo, setTodo }) {
  const SelectedHanler = () => {
    setTodo((prev) => {
      return prev.map((item) => {
        if (item.id === todo.id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    });
  };

  return (
    <li key={todo.id}>
      <form className={cl.TodoItem__item}>
        <label
          htmlFor={todo.id}
          className={todo.isCompleted ? cl.TodoItem__item__completed : ""}
        >
          {todo.text}
        </label>
        <input
          className={cl.TodoItem__input}
          id={todo.id}
          type="checkbox"
          onChange={SelectedHanler}
        />
      </form>
    </li>
  );
}
