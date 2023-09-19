import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import { blue, indigo } from "@mui/material/colors";




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
  const labelStyle = {color:blue[50]}

  return (
    
    <List sx={{ width: '95%', maxWidth: 360}}>

      {tasks.map((task, index) => (

         <ListItem key={index}  sx={{ bgcolor:  indigo[600], borderRadius: 10, margin: 1}}
         secondaryAction={
          <IconButton edge="end" aria-label="delete-edit Tasks">
                <EditIcon sx={{ color: blue[50] ,padding:1}} color="primary" onClick={() => Edit(index, task.text)}/>
                <DeleteIcon sx={{ color: blue[50]}} color="primary"  onClick={() => deleteTask(index)}/>
          </IconButton>
        }>

        <Checkbox {...label}  
        id={`checkbox-${index}`}
        checked={task.completed}
        sx={{ color: blue[50]}}
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
              <label htmlFor={`checkbox-${index}`} style={labelStyle}>{task.text}</label>

            </>
          )}
       </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
