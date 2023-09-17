import React, { useState } from "react";
import "./tasklist.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TaskList = ({ tasks, TaskCompleted, editTask, deleteTask }) => {

  const [editedTask, setEditedTask] = useState({ index: -1, text: "" });

  const Edit = (index, text) => {

    if (editedTask.index === index) {

      if (editedTask.text.trim() !== "") {
        editTask(index, editedTask.text);
      }
      setEditedTask({ index: -1, text: "" });

    } else {
      setEditedTask({ index, text });
    }

  };

  return (
    <ul id="taskList">

      {tasks.map((task, index) => (

        <li key={index}>

          <input
            type="checkbox"
            id={`checkbox-${index}`}
            className="checkboxInput"
            data-index={index}
            checked={task.completed}
            onChange={() => TaskCompleted(index)}
          />

          {editedTask.index === index ? (
            <input
              type="text"
              value={editedTask.text}
              onChange={(e) =>
                setEditedTask({ ...editedTask, text: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  Edit(index, task.text);
                }
              }}
              autoFocus
            />
          ) : (
            <>
              <label htmlFor={`checkbox-${index}`}>{task.text}</label>

              <button
                className="ButtonEdit"
                aria-label="Edit Task"
                onClick={() => Edit(index, task.text)}
              >
                <EditIcon className="fa fa-edit" id="edit" />
              </button>

              <button
                className="ButtonDelete"
                aria-label="Delete Task"
                onClick={() => deleteTask(index)}
              >
                <DeleteIcon className="fa fa-trash" id="delete" />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
