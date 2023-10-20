import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks to display.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
