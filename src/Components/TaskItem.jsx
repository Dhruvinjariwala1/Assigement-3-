import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Unmark' : 'Mark'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
