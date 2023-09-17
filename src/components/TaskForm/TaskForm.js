import React, { useState } from "react";
import "./taskform.css";

const TaskForm = ({ addTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const AddTask = () => {
    if (newTaskText.trim() !== '') {
      addTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <React.Fragment>
      
      <input
        type="text"
        name="task"
        id="TaskClass"
        aria-labelledby="TaskLabel"
        placeholder="Add New Task:"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />

      <button id="addButton" onClick={AddTask} 
      aria-label="Add Task">
      <span id="ButtonText"> AddTask </span>
      </button>

    </React.Fragment>
  );
};

export default TaskForm;
