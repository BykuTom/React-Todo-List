import { FaTrash, FaPenToSquare } from "react-icons/fa6";

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
      <input
        type="checkbox"
        checked={completed}
        onChange={(event) => {
          toggleTodo(id, event.target.checked);
        }}
      />
      <label>{title}</label>
      <button onClick={() => editTodo(id)} className="button button-edit">
        <FaPenToSquare />
      </button>
      <button onClick={() => deleteTodo(id)} className="button button-delete">
        <FaTrash />
      </button>
    </li>
  );
}
