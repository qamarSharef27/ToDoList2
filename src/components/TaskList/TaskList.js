import React, { useState } from "react";
import  "./tasklist.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';




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

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    
    <List className="list">
      {tasks.map((task, index) => (

         <ListItem key={index} className="items" 
         secondaryAction={
          <IconButton edge="end" aria-label="delete-edit Tasks">
                <EditIcon  className="edit" color="primary" onClick={() => Edit(index, task.text)}/>
                <DeleteIcon  className="delete" color="primary"  onClick={() => deleteTask(index)}/>
          </IconButton>
        }>

        <Checkbox {...label}  
        id={`checkbox-${index}`}
        checked={task.completed}
        className="checkbox"
        onChange={() => TaskCompleted(index)}
        />


          {editedTask.index === index ? (

              <TextField
              id="outlined"
              label="Edit Task"
              defaultValue={editedTask.text}
              size="small"
              onChange={(e) =>
                setEditedTask({ ...editedTask, text: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  Edit(index, task.text);
                }
              }}
              />
            
          ) : (
            <>
              <label htmlFor={`checkbox-${index}`} className="label">{task.text}</label>

            </>
          )}
       </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
