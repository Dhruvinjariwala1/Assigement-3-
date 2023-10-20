import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './main.css';


function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Sample Task 1', completed: false },
    { id: 2, title: 'Sample Task 2', completed: false },
  ]);

  const handleToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (newTask) => {
    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-manager">
      <h1>Task Manager App</h1>
      <TaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default TaskManager;
