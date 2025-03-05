import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS as renderTasks } from "../data";

function App() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [TASKS, setTASKS] = useState(renderTasks || []);

  const addTask = (newTask) => {
    setTASKS((prevTasks) => [...prevTasks, newTask]); 
  };

  const deleteTask = (taskToDelete) => {
    setTASKS((prevTasks) => prevTasks.filter((task) => task.text !== taskToDelete.text)); 
  };

  // const onTaskFormSubmit = (event) => {
  //   event.preventDefault();
  //   if (text) {
  //     const newTask = { text, category };
  //     addTask(newTask); 
  //     setText(""); 
  //   }
  // };


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        CATEGORIES={CATEGORIES} 
        setCategoryFilter={setCategoryFilter} 
        categoryFilter={categoryFilter} 
      />
      <NewTaskForm addTask={addTask}
      //  onSubmit={onTaskFormSubmit} 
       />
      <TaskList 
        TASKS={TASKS} 
        categoryFilter={categoryFilter} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;
