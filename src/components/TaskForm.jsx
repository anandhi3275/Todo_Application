import React, { useState } from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm = ({setTasks}) => {
  const [taskData,setTaskData]=useState({
    task:"",
    status:"todo",
    tags:[],
  });
    // Function to check if a tag is selected
  const checkTag=(tag)=>{
    return taskData.tags.some(item=>item===tag)
  }
    // Function to handle tag selection
  const selectTag=(tag)=>{
    if(taskData.tags.some(item=>item===tag)){
      const filterTags=taskData.tags.filter(item=>item!==tag)
      setTaskData(prev=>{
        return {...prev,tags:filterTags}
      })
    }
    else{
      setTaskData(prev=>{
        return {...prev,tags:[...prev.tags,tag]}
      })
    }
  }
    // Function to handle form input changes
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setTaskData(prev=>{
      return {...prev,[name]:value}
    })
  }
    const handleSubmit=(e)=>{
      e.preventDefault()
      if (taskData.task.trim() === "") {
        return;
      }
      setTasks(prev=>{
        return [...prev,taskData]
      })
      // Reset form fields after submission
      setTaskData({
        task:"",
        status:"todo",
        tags:[],
      })
    }
  
  
  return (
    <div className='app_header'>
      
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name="task"
        value={taskData.task}
        className='task_input' 
        placeholder='Enter your task'
        onChange={handleChange}/>
        <div className='task_form_bottom_line'>
            <div>
            <Tag name="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
            <Tag name="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
            <Tag name="Javascript" selectTag={selectTag} selected={checkTag("Javascript")}/>
            <Tag name="ReactJs" selectTag={selectTag} selected={checkTag("ReactJs")}/>
        </div>

            <div>
            <select value={taskData.status}className='task_status' onChange={handleChange}
            name="status">
                <option value='todo'>To Do</option>
                <option value='doing'>Doing</option>
                <option value='done'>Done</option>
            </select>
            <button type="submit" 
            className='task_submit'
            >+Add Task</button>
        </div>
        </div> 
      </form>
    </div>
  )
}

export default TaskForm
