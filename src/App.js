import './App.css';
import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import { Avatar, Grid, Paper } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
function App() {

    const [tasks, setTasks] = useState(() => {
     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
     return storedTasks;
   })
    const updateLocalStorage = (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
    const addTask = (taskText) => {
    const newTasks = [...tasks, { text: taskText, completed: false }];
    setTasks(newTasks);
    updateLocalStorage(newTasks);
  }
    const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    updateLocalStorage(newTasks);
  }
    const editTask = (index, newText) => {
     if (newText.trim() !== '') {
      const newTasks = [...tasks];
      newTasks[index].text = newText;
      setTasks(newTasks);
      updateLocalStorage(newTasks);
     }
   }
    const TasksCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    updateLocalStorage(newTasks);
  }
  return (
    <>
      <Grid>
        <Paper elevation={10} className='Paper'>
        <Grid className='Grid'>
          <Avatar className='Avatar'>
            <ChecklistIcon />
          </Avatar>
          <Header />
        </Grid>
        <TaskForm addTask={addTask} />
        <hr id="Line" />
        <TaskList
          tasks={tasks}
          TaskCompleted={TasksCompleted}
          editTask={editTask}
          deleteTask={deleteTask}
        />
        </Paper> 
      </Grid>
    </>
  );
}
export default App;