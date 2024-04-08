import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const moveTaskUp = (index) => {
    if (index > 0) {
      const movingTasks = [...tasks];
      [movingTasks[index], movingTasks[index - 1]] = [movingTasks[index - 1], movingTasks[index]];
      setTasks(movingTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const movingTasks = [...tasks];
      [movingTasks[index], movingTasks[index + 1]] = [movingTasks[index + 1], movingTasks[index]];
      setTasks(movingTasks);
    }
  };

  return (
    <div className="to-do-list-container">
      <h1>ToDo List 📋</h1>
      <div className="input-container">
        <form className="TodoForm" onSubmit={handleFormSubmit}>
          <input type="text" placeholder="What is the task today?" value={newTask} onChange={handleTaskInput} className="todo-input" />
          <button className="todo-btn" onClick={addTask}>
            Add task
          </button>
        </form>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆 Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇 Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
