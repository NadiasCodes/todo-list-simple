import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Eat", "Study", "Workout"]);
  const [newTask, setNewTask] = useState("");

  const handleTaskInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {};
  const deleteTask = (index) => {};
  const moveTaskUp = (index) => {};
  const moveTaskDown = (index) => {};

  return (
    <div className="to-do-list-container">
      <h1>ToDo List 📋</h1>
      <div className="input-container">
        <form className="TodoForm">
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
            <button className="delete-button" onClick={() => moveTaskDown(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆 Up
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👇 Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
