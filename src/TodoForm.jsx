import { useState } from "react";

export function TodoForm({ onSubmit }) {
  const [newItem, createItem] = useState("");

  function handleSubmit(formEvent) {
    formEvent.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    createItem("");
  }
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(eventObject) => createItem(eventObject.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="button">Add</button>
    </form>
  );
}
