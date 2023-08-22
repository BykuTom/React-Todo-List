export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => {
            toggleTodo(id, event.target.checked);
          }}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="button button-delete">
        Delete
      </button>
    </li>
  );
}
