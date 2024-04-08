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
    <div className="to-do-list">
      <h1>ToDo List</h1>
      <div>
        <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleTaskInput} />
        <button className="add-button" onClick={addTask}>
          Add task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-task" onClick={() => moveTaskDown(index)}>
              Delete
            </button>
            <button className="move-task-up" onClick={() => moveTaskUp(index)}>
              👆 Up
            </button>
            <button className="move-task-down" onClick={() => moveTaskUp(index)}>
              👇 Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
