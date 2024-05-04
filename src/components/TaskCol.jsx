import React from 'react'
import './TaskCol.css'
import TaskCard from './TaskCard'
const TaskCol = ({title,image,status,tasks,handleDelete}) => {
  return (
    <section className='task_col'>
        <h2 className='task_col_heading'><img className="task_col_icon" src={image}/>{title}</h2>

        {
          tasks.map((task,index)=>task.status===status && (<TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}/>))
        }
    </section>
  )
}

export default TaskCol
