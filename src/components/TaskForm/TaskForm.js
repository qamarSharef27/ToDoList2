import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const TaskForm = ({ addTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const AddTask = () => {
    if (newTaskText.trim() !== '') {
      addTask(newTaskText);
      setNewTaskText('');
    }
  };

  const TextFieldSstyle = {padding:10, margin:0, height:8}
  const ButtonStyle = {width:60, height:35, margin:10}

  return (
     <Grid  
      container 
      spacing={0}  
      marginLeft={4.5} 
      marginRight={5} >
      
      <TextField
          id="outlined-textarea"
          label="New Task"
          placeholder="Enter New Task:"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          style={TextFieldSstyle}
          size="small"
          multiline
        />
     <Button variant="contained" endIcon={<AddCircleIcon />} size="medium" onClick={AddTask} style={ButtonStyle} >
          Add
     </Button>

     </Grid>
  );
};

export default TaskForm;
