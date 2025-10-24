import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Smart To-Do</h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleDone} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "91vh",
    background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    background: "white",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "#2563eb",
    marginBottom: "1.5rem",
  },
};

export default App;
