import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ addTask }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);

  const onTaskFormSubmit = (event) => {
    event.preventDefault();
    if (text) {
      const newTask = { text, category };
      addTask(newTask); 
      setText(""); 
    }
  };

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
