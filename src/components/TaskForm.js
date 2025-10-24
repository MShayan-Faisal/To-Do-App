import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      category,
      dueDate,
      priority,
      completed: false,
    };

    onAdd(newTask);

    // Clear form after submit
    setTitle("");
    setCategory("General");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.select}
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Study">Study</option>
        <option value="Personal">Personal</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={styles.input}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={styles.select}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit" style={styles.button}>
        Add Task
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    marginBottom: "1.5rem",
  },
  input: {
    padding: "0.6rem",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
  },
  select: {
    padding: "0.6rem",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    backgroundColor: "#f9fafb",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default TaskForm;
