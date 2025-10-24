import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  if (tasks.length === 0) return <p>No tasks added yet.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TaskList;
