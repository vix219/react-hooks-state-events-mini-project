

import React from "react";

function Task({ text, category, deleteTask }) {
  const handleDelete = () => {
    deleteTask({ text, category }); // Pass the task object to delete
  };
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">
        X
      </button>
    </div>
  );
}



export default Task;
