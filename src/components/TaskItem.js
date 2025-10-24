import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
  const { title, category, dueDate, priority, completed } = task;

  const priorityColor = {
    High: "#dc2626",
    Medium: "#facc15",
    Low: "#10b981",
  };

  return (
    <li style={{ ...styles.item, backgroundColor: completed ? "#e0f2fe" : "#f8fafc" }}>
      <div>
        <strong style={completed ? styles.completed : {}}>{title}</strong>
        <div style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
          <span>{category}</span> | <span>Due: {dueDate || "N/A"}</span>
        </div>
        <div style={{ color: priorityColor[priority], marginTop: "0.25rem" }}>
          Priority: {priority}
        </div>
      </div>
      <div style={styles.buttons}>
        <button onClick={() => onToggle(task.id)} style={styles.btnAction}>
          {completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => onDelete(task.id)} style={styles.btnDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

const styles = {
  item: {
    padding: "1rem",
    borderRadius: "0.75rem",
    marginBottom: "1rem",
    border: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    gap: "0.5rem",
  },
  btnAction: {
    padding: "0.4rem 0.75rem",
    background: "#4ade80",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
  },
  btnDelete: {
    padding: "0.4rem 0.75rem",
    background: "#f87171",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    color: "white",
  },
  completed: {
    textDecoration: "line-through",
    color: "#6b7280",
  },
};

export default TaskItem;
