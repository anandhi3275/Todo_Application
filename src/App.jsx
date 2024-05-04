import React, { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskCol from './components/TaskCol';
import TodoIcon from '../src/assets/direct-hit.png';
import DoingIcon from '../src/assets/glowing-star.png';
import DoneIcon from '../src/assets/check-mark-button.png';

// Retrieve tasks from local storage
const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  // Initialize state for tasks, defaulting to previous tasks from local storage if available
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  // Update local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const handleDelete = (taskIndex) => {
    
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };

 

  return (
    <div className='app'>
    
      <TaskForm setTasks={setTasks}/>
      
      
      <main className='app_main'>
      
        <TaskCol title="To Do" image={TodoIcon} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskCol title="Doing" image={DoingIcon} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskCol title="Done" image={DoneIcon} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  );
};

export default App;
