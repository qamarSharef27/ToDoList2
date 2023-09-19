import React, { useState } from "react";
import  "./taskform.css";
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const TaskForm = ({ addTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const AddTask = () => {
    if (newTaskText.trim() !== '') {
      addTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
     <Grid  
      container 
      spacing={0}  
      className="grid"
       >
      <TextField
          className="TextFieldstyle"
          id="outlined-textarea"
          label="New Task"
          placeholder="Enter New Task:"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          size="small"
          multiline
        />

     <AddCircleIcon  onClick={AddTask} className="IconStyle"/>

     </Grid>
  );
};

export default TaskForm;
