import React from 'react'
import { TaskCard } from './TaskCard'

export const TaskList = ({tasks, deleteTask  }) => {

       

        if(tasks.length === 0) return <h1 className='text-white text-4x1 font-bold text-center'>There are any tasks</h1>


  return (
    <div className='grid grid-cols-4 gap-2'>
        {tasks.map((task) => (
         <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
        ))}
    </div>
  )
}
