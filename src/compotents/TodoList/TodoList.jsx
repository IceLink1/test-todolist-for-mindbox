import React from "react";
import cl from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos, setTodo }) {
  const [todoForSort, setTodoForSort] = React.useState([...todos]);
  React.useEffect(()=>{
    setTodoForSort([...todos])
  },[todos])

  const Clear = () => {
    return setTodo(() => {
      return todoForSort.filter((item) => {
        return !item.isCompleted;
      });
    });
  };

  const SortAll = () => {
    return setTodoForSort([...todos]);
  };

  const SortLeaves = () => {
    console.log(todoForSort);
    return setTodoForSort((prev) => {
      return prev.filter((item) => {
        return item.isCompleted;
      });
    });
  };

  return (
    <ul className={cl.TodoList}>
      {todoForSort.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodo={setTodo} />
      ))}
      <p>{todoForSort.length} - Осталось задачь</p>
      <button onClick={SortAll}>Все</button>
      <button onClick={SortLeaves}>Выполненые</button>
      <button onClick={Clear}>Очистить выполненые</button>
    </ul>
  );
}
