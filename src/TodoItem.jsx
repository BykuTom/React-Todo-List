export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
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
      <button onClick={() => editTodo(id)} className="button button-edit">
        Edit
      </button>
      <button onClick={() => deleteTodo(id)} className="button button-delete">
        Delete
      </button>
    </li>
  );
}
