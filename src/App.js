import './App.css';
import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';


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
    <body className="mainclass">

    <form>
    <div className="form-container">   

    <Header />

    <main>

     <div className="row">
      <div className="col-3 col-s-3 menu">
      <div id="addTask">

      <TaskForm addTask={addTask} />
     
     </div>
     </div>

     <hr id="Line" />

     <div class="col-12 col-s-12 ">

        <label for="TaskClass">Task:</label>

        <TaskList
          tasks={tasks}
          TaskCompleted={TasksCompleted}
          editTask={editTask}
          deleteTask={deleteTask}
          />

    </div>
    </div>

    <div class="form-line"></div>

    /</main>

    </div>
    </form>

    </body>
    </>
  );
}

export default App;
