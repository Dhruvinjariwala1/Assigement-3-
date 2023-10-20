import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask) {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TaskForm;
