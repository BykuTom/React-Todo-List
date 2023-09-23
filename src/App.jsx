import { useEffect, useState } from "react";
import "./styles.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function editTodo(id) {
    let alreadyEdited = false;
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id && !alreadyEdited) {
          const previousTitle = todo.title;
          todo.title = prompt("Edit Todo:", todo.title);
          if (todo.title == null || todo.title === "") {
            todo.title = previousTitle;
          }
          alreadyEdited = true;
          return todo;
        }
        return todo;
      });
    });
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}
