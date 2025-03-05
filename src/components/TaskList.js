import React from "react";
import Task from "./Task";

function TaskList({ TASKS, categoryFilter, deleteTask }) {
  
 
  const filteredTasks = (TASKS)
    ? categoryFilter === "All" ? TASKS 
    : 
    TASKS.filter((task) => task.category === categoryFilter) : []; 

  return (
    <div className="tasks">
   {filteredTasks.map((task) => (
  <Task
    key={task.id}  // Use `id` for the unique key
    id={task.id}    // Pass `id` prop to Task component
    text={task.text}
    category={task.category}
    deleteTask={deleteTask}
  />
))}

    </div>
  );
}

export default TaskList;




