import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            /* ...todo is equivalent to = id={todo.id}
          completed={todo.completed}
          title={todo.title} */
            key={todo.id}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
